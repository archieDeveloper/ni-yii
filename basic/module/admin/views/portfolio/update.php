<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Portfolio */
/* @var $category app\models\PortfolioCategory */

?>
<div class="portfolio-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form.tpl', [
        'model' => $model,
        'category' => $category
    ]) ?>

</div>
