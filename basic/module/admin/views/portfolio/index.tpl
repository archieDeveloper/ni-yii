{use class="yii\helpers\Html"}
{use class="yii\grid\GridView"}
{use class="yii\helpers\Url"}
{use class="app\helpers\GridHelper"}
{use class="yii\widgets\ListView"}
{use class="app\models\PortfolioCategory"}
{use class="yii\helpers\ArrayHelper"}
{use class="yii\widgets\Pjax"}
{use class="microinginer\dropDownActionColumn\DropDownActionColumn"}

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

    <div class="checkbox checkbox-success">
        <input id="checkbox" type="checkbox">
    </div>


    {Html::activeDropDownList(
        $searchModel,
        'category_id',
        ArrayHelper::map(PortfolioCategory::find()->orderBy('position')->all(), 'id', 'name'),
        ['class' => 'btn btn-default', 'prompt' => 'Фильтр по категории']
    )}
    {Pjax::begin()|void}
    {GridView::widget([
        'dataProvider' => $dataProvider,
        'layout' => '{summary}{pager}{items}{pager}',
        'columns' => [
            ['class' => 'justinvoelker\awesomebootstrapcheckbox\CheckboxColumn'],
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
            ['class' => DropDownActionColumn::className()]
        ]
    ])}
    {Pjax::end()|void}

    {* <ul class="list-page js-portfolio-list">
        {ListView::widget([
            'dataProvider' => $dataProvider,
            'itemView' => '_list_item.tpl'
        ])}
    </ul> *}

</div>
