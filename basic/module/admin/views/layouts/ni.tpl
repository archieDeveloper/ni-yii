{use class="yii\helpers\Html"}
{use class="app\assets\AdminAsset"}
{use class="yii\bootstrap\Nav"}
{use class="yii\widgets\Breadcrumbs"}
{AdminAsset::register($this)|void}
{$this->beginPage()}
<!doctype html>
<html lang="{Yii::$app->language}">
<head>
    <meta charset="{Yii::$app->charset}">
    <title>{Html::encode($this->title)}</title>
    <link rel="shortcut icon" href="/images/ui/favicon_admin.ico" type="image/x-icon">
    {Html::csrfMetaTags()}
    {$this->head()}
</head>
<body>
{$this->beginBody()}
<div class="wrap-container">
    <div class="wrap-color-line">
        {for $wclItem=1 to 7}<div class="wcl-item-{$wclItem}"></div>{/for}
    </div>
    <div class="header">
        <h1>Админ панель</h1>
        <a href="/" target="_blank" class="button blue">Просмотреть сайт</a>
        <a href="/admin/logout.html" class="button">Выйти</a>
    </div>
    <div class="wrap-content">
        <div class="left-aside">
            <span><i class="flaticon-menu10"></i> Меню</span>
            <ul>
                <li><a href="/{$this->context->module->id}.html">Консоль</a></li>
                <li class="separator"></li>
                <li><a href="/{$this->context->module->id}/pages.html">Страницы</a></li>
                <li {(!empty($page_controller) && $page_controller == 'portfolio') ? 'class="active"' : ''}>
                    <a href="/{$this->context->module->id}/portfolio.html">Выполненные работы</a>
                    <ul>
                        <li {(!empty($page_controller) && empty($page_action) && $page_controller == 'portfolio') ? 'class="active"' : ''}><a href="/{$this->context->module->id}/portfolio.html">Все работы</a></li>
                        <li {(!empty($page_controller) && $page_controller == 'portfolio' && !empty($page_action) && $page_action == 'add') ? 'class="active"' : ''}><a href="/{$this->context->module->id}/portfolio/add.html">Добавить новую</a></li>
                        <li {(!empty($page_controller) && $page_controller == 'portfolio' && !empty($page_action) && $page_action == 'categories') ? 'class="active"' : ''}><a href="/{$this->context->module->id}/portfolio/categories.html">Категории</a></li>
                    </ul>
                </li>
                <li {(!empty($page_controller) && $page_controller == 'articles') ? 'class="active"' : ''}>
                    <a href="/{$this->context->module->id}/articles.html">Статьи</a>
                    <ul>
                        <li {(!empty($page_controller) && empty($page_action) && $page_controller == 'articles') ? 'class="active"' : ''}><a href="/{$this->context->module->id}/articles.html">Все статьи</a></li>
                        <li {(!empty($page_controller) && $page_controller == 'articles' && !empty($page_action) && $page_action == 'add') ? 'class="active"' : ''}><a href="/{$this->context->module->id}/articles/add.html">Добавить новую</a></li>
                    </ul>
                </li>
                <li><a href="/{$this->context->module->id}/contacts.html">Контакты</a></li>
                <li><a href="/{$this->context->module->id}/feedback.html">Обратная связь</a></li>
                <li class="separator"></li>
                <li><a href="/{$this->context->module->id}/feedback.html">Модераторы</a></li>
                <li><a href="/{$this->context->module->id}/feedback.html">Настройки</a></li>
            </ul>
        </div>
        <div class="content">
            {$content}
        </div>
    </div>
</div>
{$this->endBody()}
</body>
</html>
{$this->endPage()}