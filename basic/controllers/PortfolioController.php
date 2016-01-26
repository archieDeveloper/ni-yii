<?php

namespace app\controllers;

use app\models\Portfolio;
use app\models\PortfolioCategory;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;

class PortfolioController extends Controller
{
    public function actionIndex()
    {
        $portfolioCategoryModel = new PortfolioCategory;
        $categories = $portfolioCategoryModel->getMenu();
        $portfolioQuery = Portfolio::find()->where(['is_active' => 1]);
        $portfolio = new ActiveDataProvider([
            'query' => $portfolioQuery,
            'pagination' => [
                'pageSize' => 10,
            ],
        ]);
        $this->view->title = 'Выполненные работы';
        $this->view->params['breadcrumbs'][] = [
            'label' => $this->view->title,
        ];
        return $this->render('index.tpl', [
            'categories' => $categories,
            'portfolio' => $portfolio
        ]);
    }

    public function actionCategory($link)
    {
        $portfolioCategoryModel = new PortfolioCategory;
        $currentCategory = $portfolioCategoryModel->findOne(['link' => $link]);
        if (!$currentCategory) {
            throw new NotFoundHttpException('Страница не найдена.');
        }
        $categories = $portfolioCategoryModel->getMenu();
        $portfolioQuery = Portfolio::find()->where([
            'is_active' => 1,
            'category_id' => $currentCategory->id
        ]);
        $portfolio = new ActiveDataProvider([
            'query' => $portfolioQuery,
            'pagination' => [
                'pageSize' => 10,
            ],
        ]);
        $this->view->title = 'Выполненные работы | ' . $currentCategory->name;
        $this->view->params['breadcrumbs'][] = [
            'label' => 'Выполненные работы',
            'url' => '/portfolio.html'
        ];
        $this->view->params['breadcrumbs'][] = $currentCategory->name;
        return $this->render('index.tpl', [
            'categories' => $categories,
            'portfolio' => $portfolio
        ]);
    }

}
