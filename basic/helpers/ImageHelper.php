<?php
namespace app\helpers;

use rico\yii2images\models\PlaceHolder;

class ImageHelper
{
    public static function getImage($model, $size = null)
    {
        return $model->cover ? $model->cover->getUrl($size) : (new PlaceHolder())->getUrl($size);
    }
}