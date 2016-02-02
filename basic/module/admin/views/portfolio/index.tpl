{use class="yii\helpers\Html"}
{use class="yii\grid\GridView"}
{use class="yii\helpers\Url"}
{use class="yii\widgets\ListView"}

<div class="portfolio-index">

    <h2>{Html::encode($this->title)}</h2>

    <p>
        {Html::a('<i class="flaticon-plus13"></i> Добавить работу', ['create'], ['class' => 'button green'])}
    </p>

    {* {GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            [
                'label' => 'Картинка',
                'format' => 'image',
                'value' => 'img.filePath'
            ],
            'category.name:text:Имя категории',
            'title',
            'description',
            'date_create',
            'date_update',

            ['class' => 'yii\grid\ActionColumn']
        ]
    ])} *}

    <ul class="list-page js-portfolio-list">
        {ListView::widget([
            'dataProvider' => $dataProvider,
            'itemView' => '_list_item.tpl'
        ])}
    </ul>

</div>
