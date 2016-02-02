<?php

namespace app\controllers;

use app\models\Portfolio;
use app\models\PortfolioCategory;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;

class PortfolioController extends Controller
{
    /**
     * Событие выполненных работ
     *
     * @return string
     */
    public function actionIndex()
    {
        $portfolioCategoryModel = new PortfolioCategory;
        $categories = $portfolioCategoryModel->getMenu();
        $portfolio = $this->findPortfolios();
        $this->view->title = 'Выполненные работы';
        $this->view->params['breadcrumbs'][] = [
            'label' => $this->view->title,
        ];
        return $this->render('index.tpl', [
            'categories' => $categories,
            'portfolio' => $portfolio
        ]);
    }

    /**
     * Событие категории выполненных работ
     *
     * @param string $link ссылка на категорию
     * @return string
     * @throws NotFoundHttpException
     */
    public function actionCategory($link)
    {
        $portfolioCategoryModel = new PortfolioCategory;
        $currentCategory = $portfolioCategoryModel->findOne(['link' => $link]);
        if (!$currentCategory) {
            throw new NotFoundHttpException('Страница не найдена.');
        }
        $categories = $portfolioCategoryModel->getMenu($link);
        $portfolio = $this->findPortfolios($currentCategory);
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

    /**
     * Найти выполненные работы
     *
     * @param PortfolioCategory|null $category
     * @return ActiveDataProvider
     */
    protected function findPortfolios(PortfolioCategory $category = null)
    {
        $portfolioQuery = Portfolio::find()->where([
            'is_active' => 1,
        ]);
        if ($category !== null) {
            $portfolioQuery->where(['category_id' => $category->id]);
        }
        $portfolio = new ActiveDataProvider([
            'query' => $portfolioQuery->with('category'),
            'pagination' => [
                'pageSize' => 10,
            ],
        ]);
        return $portfolio;
    }

}
