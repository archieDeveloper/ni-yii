{use class="yii\helpers\Html"}
{use class="yii\grid\GridView"}
{use class="yii\helpers\Url"}
{use class="app\helpers\GridHelper"}
{use class="yii\widgets\ListView"}
{use class="app\models\PortfolioCategory"}
{use class="yii\helpers\ArrayHelper"}
<div class="wrap-header">
    <div class="row">
        <div class="col-xs-6">
            <span class="h2">{Html::encode($this->title)}</span></div>
        <div class="col-xs-6 text-right">
            <div class="btn-group">
                {Html::a('<i class="flaticon-plus13"></i> Добавить работу', ['create'], ['class' => 'btn btn-success'])}
            </div>
        </div>
    </div>
</div>
<div class="portfolio-index">

    {GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\CheckboxColumn'],
            [
                'attribute' => 'img',
                'label' => false,
                'format' => 'image',
                'value' => GridHelper::getUrlImage()
            ],
            [
                'attribute' => 'category_id',
                'filter' => Html::activeDropDownList(
                    $searchModel,
                    'category_id',
                    ArrayHelper::map(PortfolioCategory::find()->orderBy('position')->all(), 'id', 'name'),
                    ['class' => 'form-control', 'prompt' => '']
                ),
                'value' => 'categoryName'
            ],
            'title',
            'description',

            [
                'class' => 'yii\grid\ActionColumn'
            ]
        ]
    ])}

    {* <ul class="list-page js-portfolio-list">
        {ListView::widget([
            'dataProvider' => $dataProvider,
            'itemView' => '_list_item.tpl'
        ])}
    </ul> *}

</div>
