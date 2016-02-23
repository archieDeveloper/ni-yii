<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AdminAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/admin/all.css',
        'css/admin/bc.css',
        'css/admin/main.css',
//        'css/admin.css',
//        'css/admin_form.css',
        'fonts/boblic/boblic.css',
        'fonts/clearsans/clearsans.css',
        'css/flaticon.css'
    ];
    public $js = [
        'js/admin.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapPluginAsset',
        '\rmrevin\yii\fontawesome\AssetBundle',
        'justinvoelker\awesomebootstrapcheckbox\Asset',
        'app\assets\BackboneAsset'
    ];
}
