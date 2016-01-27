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
        <div class="cleaner"></div>
    </nav>
    {if isset($slider_boolean)}
        {include '@app/views/layouts/include/slider.tpl'}
    {/if}
</div>