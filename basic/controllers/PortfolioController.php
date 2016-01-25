<?php

namespace app\controllers;

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
            'url' => $currentCategory ? 'portfolio/index' : null
        ];
        if ($currentCategory) {
            $this->view->params['breadcrumbs'][] = [
                'label' => $currentCategory->name,
            ];
        }
        return $this->render('index', [
            'categories' => $portfolioCategoryModel->getMenu($category)
        ]);
    }

}
