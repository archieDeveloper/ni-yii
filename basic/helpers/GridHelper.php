<?php
namespace app\helpers;

class GridHelper
{
    public static function getUrlImage()
    {
        return function($model) {
            return $model->cover ? $model->cover->getUrl('55x') : ImageHelper::getPlaceHolder()->getUrl('55x');
        };
    }
}