{use class="yii\widgets\Menu"}
{use class="yii\widgets\ListView"}
<div class="wrap">
    <div class="wrap-center">
        <div class="left-aside">
            <span>Категории</span>
            {Menu::widget([
                'items' => $categories,
                'options' => ['class' => 'category-list']
            ])}
        </div>
        <div class="wrap-products">
            <div id="portfolio-container">
                {ListView::widget([
                    'dataProvider' => $portfolio,
                    'itemView' => '_list_item.tpl'
                ])}
            </div>
            <div class="cleaner"></div>
        </div>
        <div class="cleaner"></div>
    </div>
</div>
