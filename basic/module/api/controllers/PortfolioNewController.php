<?php

namespace app\module\api\controllers;

use yii\data\ActiveDataProvider;
use Yii;
use yii\rest\Controller;
use app\models\PortfolioSearch;


/**
 * PortfolioController implements the CRUD actions for Portfolio model.
 */
class PortfolioNewController extends Controller
{
    public function actionIndex()
    {
        $searchModel = new PortfolioSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        return $dataProvider;
//        return new ActiveDataProvider([
//            'query' => Portfolio::find(),
//        ]);
    }
}