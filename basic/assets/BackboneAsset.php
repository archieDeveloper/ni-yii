<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Backbone asset
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class BackboneAsset extends AssetBundle
{
    public $sourcePath = '@bower/backbone';
    public $js = [
        'backbone-min.js',
    ];

    public $depends = [
        'app\assets\UnderscoreAsset',
    ];
}
