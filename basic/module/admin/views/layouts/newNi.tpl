{use class="yii\helpers\Html"}
{use class="app\assets\AdminAsset"}
{use class="yii\bootstrap\Nav"}
{use class="yii\widgets\Breadcrumbs"}
{AdminAsset::register($this)|void}
{$this->beginPage()}
<!DOCTYPE html>
<html lang="{Yii::$app->language}">
<head>
    <meta charset="{Yii::$app->charset}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>{Html::encode($this->title)}</title>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    {Html::csrfMetaTags()}
    {$this->head()}
</head>
<body>
{$this->beginBody()}
<div class="wrap-sidebar">
    <div class="logo">
        <span class="logo-header">Админка</span>
        <a href="#" class="go-home"></a>
    </div>
    <span class="sidebar-block-title"><i class="flaticon-menu10"></i> Меню</span>
    <ul class="nav">
        <li><a href="/{$this->context->module->id}.html">Консоль</a></li>
        <li class="separator"></li>
        <li><a href="/{$this->context->module->id}/pages.html">Страницы</a></li>
        <li {(!empty($page_controller) && $page_controller == 'portfolio') ? 'class="active"' : ''}>
            <a href="/{$this->context->module->id}/portfolio.html">Выполненные работы</a>
        </li>
        <li {(!empty($page_controller) && $page_controller == 'articles') ? 'class="active"' : ''}>
            <a href="/{$this->context->module->id}/articles.html">Статьи</a>
        </li>
        <li><a href="/{$this->context->module->id}/contacts.html">Контакты</a></li>
        <li><a href="/{$this->context->module->id}/feedback.html">Обратная связь</a></li>
        <li class="separator"></li>
        <li><a href="/{$this->context->module->id}/feedback.html">Модераторы</a></li>
        <li><a href="/{$this->context->module->id}/feedback.html">Настройки</a></li>
    </ul>
</div>
<div class="container-fluid wrap-container">
    {$content}
</div>

{$this->endBody()}
</body>
</html>
{$this->endPage()}