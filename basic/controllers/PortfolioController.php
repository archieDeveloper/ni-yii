<?php

namespace app\controllers;

use app\models\Portfolio;
use app\models\PortfolioCategory;
use yii\data\ActiveDataProvider;

class PortfolioController extends \yii\web\Controller
{
    public function actionIndex($category = null)
    {
        $portfolioCategoryModel = new PortfolioCategory;
        $currentCategory = $portfolioCategoryModel->find()
            ->where(['link' => $category])->one();
        $this->view->title = 'Выполненные работы';
        $this->view->params['breadcrumbs'][] = [
            'label' => $this->view->title,
            'url' => $currentCategory ? '/portfolio.html' : null
        ];
        if ($currentCategory) {
            $this->view->params['breadcrumbs'][] = [
                'label' => $currentCategory->name,
            ];
        }
        $portfolioModel = new Portfolio;
        $portfolioQuery = $portfolioModel->find()->where(['is_active' => 1]);
        if ($currentCategory) {
            $portfolioQuery->where(['category_id' => $currentCategory->id]);
        }
        $portfolio = new ActiveDataProvider([
            'query' => $portfolioQuery,
            'pagination' => [
                'pageSize' => 10,
            ],
        ]);
        return $this->render('index', [
            'categories' => $portfolioCategoryModel->getMenu($category),
            'portfolio' => $portfolio
        ]);
    }

}
