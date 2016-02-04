<?php
namespace app\helpers;

use rico\yii2images\models\PlaceHolder;

class ImageHelper
{
    public static function getPlaceHolder()
    {
        return new PlaceHolder();
    }
}