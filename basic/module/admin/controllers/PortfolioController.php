<?php

namespace app\module\admin\controllers;

use app\models\PortfolioCategory;
use Yii;
use app\models\Portfolio;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use app\models\PortfolioSearch;

/**
 * PortfolioController implements the CRUD actions for Portfolio model.
 */
class PortfolioController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * Lists all Portfolio models.
     * @return mixed
     */
    public function actionIndex()
    {
        $this->layout = 'newNi.tpl';

        $searchModel = new PortfolioSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        $this->view->title = 'Выполненные работы';
        $this->view->params['breadcrumbs'][] = $this->view->title;
        return $this->render('index.tpl', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Portfolio model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view.tpl', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Portfolio model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Portfolio();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            if($model->image) {
                $path = Yii::getAlias('@webroot/images/uploads/')
                    . $model->image->baseName . '.' . $model->image->extension;
                $model->image->saveAs($path);
                $model->attachImage($path);
            }

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            $this->view->title = 'Добавить работу';
            $this->view->params['breadcrumbs'][] = ['label' => 'Portfolios', 'url' => ['index']];
            $this->view->params['breadcrumbs'][] = $this->view->title;
            return $this->render('create.tpl', [
                'model' => $model,
                'category' => PortfolioCategory::find()->all()
            ]);
        }
    }

    /**
     * Updates an existing Portfolio model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view.tpl', 'id' => $model->id]);
        } else {
            $this->view->title = 'Update Portfolio: ' . ' ' . $model->title;
            $this->view->params['breadcrumbs'][] = ['label' => 'Portfolios', 'url' => ['index']];
            $this->view->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
            $this->view->params['breadcrumbs'][] = 'Update';
            return $this->render('update', [
                'model' => $model,
                'category' => PortfolioCategory::find()->all()
            ]);
        }
    }

    /**
     * Deletes an existing Portfolio model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->remove();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Portfolio model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Portfolio the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Portfolio::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
