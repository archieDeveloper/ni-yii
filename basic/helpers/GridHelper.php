<?php
namespace app\helpers;

class GridHelper
{
    public static function getUrlImage()
    {
        return function($model) {
            return $model->getImage()->getUrl('55x');
        };
    }
}