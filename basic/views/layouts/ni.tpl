{use class="yii\helpers\Html"}
{use class="app\assets\AppAsset"}
{use class="yii\bootstrap\Nav"}
{use class="yii\widgets\Breadcrumbs"}
{AppAsset::register($this)|void}
{$this->beginPage()}
<!DOCTYPE html>
<html lang="{Yii::$app->language}">
<head>
    <meta charset="{Yii::$app->charset}">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <meta content="/images/ui/share_logo.png" property="og:image">
    <meta name='yandex-verification' content='553ab0d7f9c8ef13' />
    {Html::csrfMetaTags()}
    <title>{Html::encode($this->title)} | Новый Интерьер</title>
    {$this->head()}
</head>
<body>
{$this->beginBody()}
{include '@app/views/layouts/include/form_obr.tpl'}
{include '@app/views/layouts/include/header.tpl'}
<div id="content_wrap">
    {include '@app/views/layouts/include/breadcrumb.tpl'}
    {$content}
</div>
{include '@app/views/layouts/include/footer.tpl'}
{include '@app/views/layouts/include/yandex_metrika.tpl'}
{include '@app/views/layouts/include/google_analytics.tpl'}
{$this->endBody()}
</body>
</html>
{$this->endPage()}