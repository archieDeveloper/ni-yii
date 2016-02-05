{use class="yii\helpers\Html"}
{use class="yii\grid\GridView"}
{use class="yii\helpers\Url"}
{use class="app\helpers\GridHelper"}
{use class="yii\widgets\ListView"}
{use class="app\models\PortfolioCategory"}
{use class="yii\helpers\ArrayHelper"}
{use class="yii\widgets\Pjax"}
{use class="microinginer\dropDownActionColumn\DropDownActionColumn"}


{Html::beginForm(['delete'],'post')}

<div class="wrap-header">
    <div class="row">
        <div class="col-xs-6">
            <span class="h2">{Html::encode($this->title)}</span></div>
        <div class="col-xs-6 text-right">
            <div class="btn-group">
                {Html::submitButton('<i class="flaticon-trash3"></i> Удалить', ['class' => 'btn btn-danger'])}
                {Html::a('<i class="flaticon-plus13"></i> Добавить работу', ['create'], [
                    'class' => 'btn btn-success'
                ])}
            </div>
        </div>
    </div>
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
            ['class' => DropDownActionColumn::className()],
            [
                'class' => 'yii\grid\ActionColumn'
            ]
        ]
    ])}
    {Pjax::end()|void}

    {* <ul class="list-page js-portfolio-list">
        {ListView::widget([
            'dataProvider' => $dataProvider,
            'itemView' => '_list_item.tpl'
        ])}
    </ul> *}


{Html::endForm()}


<icons>
    <i class="flaticon-align7"></i>
    <i class="flaticon-arrow63"></i>
    <i class="flaticon-arrow64"></i>
    <i class="flaticon-arrow73"></i>
    <i class="flaticon-arrows4"></i>
    <i class="flaticon-ascendant"></i>
    <i class="flaticon-attachment3"></i>
    <i class="flaticon-checkmark2"></i>
    <i class="flaticon-chevron8"></i>
    <i class="flaticon-circle9"></i>
    <i class="flaticon-clockwise"></i>
    <i class="flaticon-cloud14"></i>
    <i class="flaticon-code3"></i>
    <i class="flaticon-conversation1"></i>
    <i class="flaticon-cross5"></i>
    <i class="flaticon-days"></i>
    <i class="flaticon-direction1"></i>
    <i class="flaticon-down5"></i>
    <i class="flaticon-down6"></i>
    <i class="flaticon-download12"></i>
    <i class="flaticon-edit4"></i>
    <i class="flaticon-export"></i>
    <i class="flaticon-eye8"></i>
    <i class="flaticon-feed"></i>
    <i class="flaticon-folder24"></i>
    <i class="flaticon-forward1"></i>
    <i class="flaticon-frontal"></i>
    <i class="flaticon-gaming"></i>
    <i class="flaticon-gear"></i>
    <i class="flaticon-graph3"></i>
    <i class="flaticon-graph7"></i>
    <i class="flaticon-graph8"></i>
    <i class="flaticon-headset1"></i>
    <i class="flaticon-heart10"></i>
    <i class="flaticon-help2"></i>
    <i class="flaticon-home11"></i>
    <i class="flaticon-info6"></i>
    <i class="flaticon-justify"></i>
    <i class="flaticon-left11"></i>
    <i class="flaticon-left16"></i>
    <i class="flaticon-left17"></i>
    <i class="flaticon-line4"></i>
    <i class="flaticon-loading"></i>
    <i class="flaticon-location12"></i>
    <i class="flaticon-lock5"></i>
    <i class="flaticon-loop4"></i>
    <i class="flaticon-mail5"></i>
    <i class="flaticon-map4"></i>
    <i class="flaticon-media11"></i>
    <i class="flaticon-media12"></i>
    <i class="flaticon-menu10"></i>
    <i class="flaticon-microphone6"></i>
    <i class="flaticon-mobile5"></i>
    <i class="flaticon-mobile7"></i>
    <i class="flaticon-move5"></i>
    <i class="flaticon-multimedia1"></i>
    <i class="flaticon-new8"></i>
    <i class="flaticon-next5"></i>
    <i class="flaticon-note3"></i>
    <i class="flaticon-open15"></i>
    <i class="flaticon-open16"></i>
    <i class="flaticon-outline3"></i>
    <i class="flaticon-outlined"></i>
    <i class="flaticon-phone14"></i>
    <i class="flaticon-photo7"></i>
    <i class="flaticon-plus13"></i>
    <i class="flaticon-print1"></i>
    <i class="flaticon-question2"></i>
    <i class="flaticon-rectangular1"></i>
    <i class="flaticon-reply2"></i>
    <i class="flaticon-reply4"></i>
    <i class="flaticon-return5"></i>
    <i class="flaticon-retweet1"></i>
    <i class="flaticon-search6"></i>
    <i class="flaticon-star11"></i>
    <i class="flaticon-stop4"></i>
    <i class="flaticon-tablet4"></i>
    <i class="flaticon-tablet5"></i>
    <i class="flaticon-text15"></i>
    <i class="flaticon-text2"></i>
    <i class="flaticon-thin2"></i>
    <i class="flaticon-thin6"></i>
    <i class="flaticon-thumbs9"></i>
    <i class="flaticon-thumbup"></i>
    <i class="flaticon-trash3"></i>
    <i class="flaticon-triangle4"></i>
    <i class="flaticon-upload8"></i>
    <i class="flaticon-user14"></i>
    <i class="flaticon-user15"></i>
    <i class="flaticon-view"></i>
    <i class="flaticon-view2"></i>
    <i class="flaticon-view3"></i>
    <i class="flaticon-volume12"></i>
    <i class="flaticon-volume5"></i>
    <i class="flaticon-window12"></i>

</icons>