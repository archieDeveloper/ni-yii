<?php
namespace app\helpers;

use yii\bootstrap\Html;

class GridHelper
{
    public static function getUrlImage()
    {
        return function($model) {
            return $model->cover ? $model->cover->getUrl('55x') : ImageHelper::getPlaceHolder()->getUrl('55x');
        };
    }

    public static function getButtonView()
    {
        return function() {
            return Html::a('<span class="glyphicon glyphicon-eye-open"></span>', ['view'], ['title' => 1, 'data-pjax' => '0']);
        };
    }

    public static function getButtonEdit()
    {
        return function($url, $model) {
            return Html::a('<i class="flaticon-edit4"></i> Редактировать', $url, [
                'class' => 'btn btn-primary'
            ]);
        };
    }

    public static function getButtonDelete()
    {
        return function($url, $model) {
            return Html::a('<i class="flaticon-trash3"></i>', $url, [
                'title' => 'Удалить',
                'data' => [
                    'method' => 'post'
                ],
                'class' => 'btn btn-danger'
            ]);
        };
    }
}