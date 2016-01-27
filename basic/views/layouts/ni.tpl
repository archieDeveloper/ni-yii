{use class="yii\helpers\Html"}
{use class="app\assets\AppAsset"}
{use class="yii\bootstrap\Nav"}
{AppAsset::register($this)|void}
{$this->beginPage()}
<!DOCTYPE html>
<html lang="{Yii::$app->language}">
<head>
    <meta charset="{Yii::$app->charset}">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <meta content="/images/ui/share_logo.png" property="og:image">

    <meta name="keywords" content="<?=$page_info->keywords?>" />
    <meta name="description" content="<?=$page_info->description?>" />
    <meta name='yandex-verification' content='553ab0d7f9c8ef13' />

    {Html::csrfMetaTags()}
    <title>{Html::encode($this->title)} | Новый Интерьер</title>
    {$this->head()}
</head>

<body>
{$this->beginBody()}
{include '@app/views/layouts/include/form_obr.tpl'}

<div id="header_wrap">
    <header id="header">
        <h1><a href="/"><img id="logo" src="/images/ui/logo-ni.png">Новый Интерьер</a></h1>
        <div id="info_head">
            <span><b>Часы работы:</b> с 10:00 до 19:00</span><br>
            <span><b>Телефон:</b> +7 (951) 226-25-96</span><br>
            <span><b>Адрес:</b> г.Новокузнецк пр.Запсибовцев, д. 39</span>
        </div>
        <div class="cleaner"></div>
    </header>
    <nav id="nav">
            {Nav::widget([
                'items' => [
                    ['label' => 'Главная', 'url' => ['/home']],
                    ['label' => 'Выполненные работы', 'url' => ['/portfolio']],
                    ['label' => 'Статьи', 'url' => ['/article']],
                    ['label' => 'Контакты', 'url' => ['/contact']]
                ]
            ])}
            {*<?php foreach ($page_list as $value): if($value->show_nav):?>*}
                {*<?php switch ($value->type): case "template": ?>*}
                    {*<li <?php if($value->id == 5){ echo 'class="end-list"'; } ?>><a href="/<?=$value->name;?><?php if (!empty($value->name)) : echo '.html'; endif;?>" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_active"';} ?>><?=$value->title;?></a></li>*}
                    {*<?php break; case "page": ?>*}
                    {*<li <?php if($value->id == 5){ echo 'class="end-list"'; } ?>><a href="/<?=$value->name;?>.html" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_active"';} ?>><?=$value->title;?></a></li>*}
                    {*<?php break; endswitch; ?>*}
            {*<?php endif; endforeach; ?>*}
            {*<?php /*<a class="auction" href="/auctions.html">Аукцион<span>new</span></a>*/ ?>*}
        <div class="cleaner"></div>
    </nav>
    {if isset($slider_boolean)}
        {include '@app/views/layouts/include/slider.tpl'}
    {/if}
</div>
<div id="content_wrap">
    {$content}
</div>
<div id="footer_wrap">
    <footer id="footer">
        <nav>
            <ul class="footer_nav">
                <span>Меню</span>
                {*<?php foreach ($page_list as $value): if($value->show_footer):?>*}
                    {*<?php switch ($value->type): case "template": ?>*}
                        {*<li><a href="/<?=$value->name;?><?php if (!empty($value->name)) : echo '.html'; endif;?>" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_footer_active"';} ?>><?=$value->title;?></a></li>*}
                        {*<?php break; case "page": ?>*}
                        {*<li><a href="/<?=$value->name;?>.html" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_footer_active"';} ?>><?=$value->title;?></a></li>*}
                        {*<?php break; endswitch; ?>*}
                {*<?php endif; endforeach; ?>*}
            </ul>

            <ul class="footer_nav">
                <span>Каталог</span>
                {*<?php foreach ($list_category_portfolio as $item) : ?>*}
                    {*<?php if ($item->link != 'no-category') : ?>*}
                        {*<li <?php if(isset($category) && $item->link == $category) { echo 'class="active"'; } ?>><a href="/portfolio/category/<?=$item->link?>.html"><?=$item->name?></a></li>*}
                    {*<?php endif; ?>*}
                {*<?php endforeach; ?>*}
            </ul>
            <ul class="footer_nav">
                <span>Информация</span>
                <li><a href="/">Карта сайта</a></li>
                <li><a href="/portfolio.html">Политика</a></li>
                <li><a href="/contacts.html#feedback">Обратная связь</a></li>
                <li><a href="/">Вакансии</a></li>
                <li><a href="/portfolio.html">Сотрудничество</a></li>
            </ul>
        </nav>
        <div id="soc_seti">
            <div class="addthis_toolbox" id="social_block">
                <div id="addthis_toolbox_share" class="text">
                    <p>Следуйте за нами в соц. сетях</p>
                </div>
                <div class="soc-icons">
                    <a href="http://vk.com/newinterer" class="vk-icon"></a>
                    <a href="http://odnoklassniki.ru/group/54243398516741" class="ok-icon"></a>
                </div>
                <div class="cleaner"></div>
                <p style="margin:15px 0 0 0;">+7 (951) 226-25-96</p>
                <p>Часы работы: с 10:00 до 19:00</p>
            </div>
        </div>
    </footer>
    <div class="copyright">Новый Интерьер {date('Y')}г. Все права защищены.</div>
</div>

{include '@app/views/layouts/include/yandex_metrika.tpl'}
{include '@app/views/layouts/include/google_analytics.tpl'}

{$this->endBody()}
</body>
</html>
{$this->endPage()}