{use class="yii\helpers\Html"}
{use class="yii\widgets\DetailView"}

{*{assign var=$this->title value=$model->title}*}
{*{assign var='$this->params[breadcrumbs][]' value=['label' => 'Portfolios', 'url' => ['index']]}*}
{*{assign var='$this->params[breadcrumbs][]' value=$this->title}*}
<div class="portfolio-view">

    <h1>{Html::encode($this->title)}</h1>

    <p>
        {Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary'])}
        {Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post'
            ]
        ])}
    </p>

    {DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            [
                'label' => 'Имя категории',
                'value' => $model->category->name
            ],
            'title',
            'description',
            'is_active',
            'date_create',
            'date_update'
        ]
    ])}

</div>
