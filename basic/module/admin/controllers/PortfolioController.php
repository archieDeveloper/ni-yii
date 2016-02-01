<?php

namespace app\module\admin\controllers;

use yii\web\Controller;

class PortfolioController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }
}
