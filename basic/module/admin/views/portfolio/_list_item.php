<?php
use app\helpers\ImageHelper;
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
?>
<div class="col-xs-12">
    <?=Html::a('<span aria-hidden="true">&times;</span>', ['delete', 'id' => $model->id], [
        'title' => 'Удалить',
        'data' => [
            'method' => 'post'
        ],
        'class' => 'close'
    ])?>
</div>
<div class="col-xs-12">
    <div class="row">
        <div class="col-md-2">
            <img src="<?=ImageHelper::getImage($model, '200x')?>" alt="" class="img-rounded img-responsive center-block mb-20">
        </div>
        <div class="col-md-10">
            <?php $form = ActiveForm::begin(); ?>
            <?= $form->field($model, 'category_id')->dropDownList($categories) ?>
            <?= $form->field($model, 'title') ?>
            <?= $form->field($model, 'description')->textarea() ?>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>

<?php
/*
<li class="js-item" data-id="106">
    <div class="img">
        <img src="<?=ImageHelper::getImage($model, '200x')?>" alt="">
        <a class="button trash js-trash" href="javascript:void(0);"><i class="flaticon-trash3"></i> В корзину</a>
        <span class="edit-img" data-id="106"><i class="flaticon-photo7"></i> Изменить миниатюру</span>
    </div>
  <span>
    <b>Заголовок: </b><br>
    <input class="input-edit js-title" type="text" value="{$model->title}" size="60" placeholder="Без заголовка">
    <span>
      <span class="status-field-edit js-title-status-edit"><i class="flaticon-edit4"></i> Редактирование...</span>
      <span class="status-field-save js-title-status-save"><i class="flaticon-upload8"></i> Сохранение...</span>
    </span><br>
    <span class="select">
      <b>Категория: </b><br>
      <a href="javascript:void(0);" class="slct js-select">Шкафы-купе<i class="flaticon-chevron8"></i></a>
      <span class="status-fields">
        <span class="status-field-edit js-select-status-edit" style="display: none;"><i class="flaticon-edit4"></i> Редактирование...</span>
        <span class="status-field-save js-select-status-save" style="display: none;"><i class="flaticon-upload8"></i> Сохранение...</span>
      </span>
      <ul class="drop js-select-list" data-id="106" style="display: none;">
          <li></li>
          <li class="active">Шкафы-купе</li>
          <li>Кухни</li>
          <li class="">Детские</li>
          <li>Окна</li>
          <li>Двери</li>
          <li>Прихожие</li>
          <li>Арки</li>
          <li>Без категории</li>
      </ul>
    </span>
  </span>
    <div class="clr"></div>
</li>
*/
?>