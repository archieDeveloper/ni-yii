{use class="yii\helpers\Html"}
<div class="portfolio-create">

    <h1>{Html::encode($this->title)}</h1>

    {$this->render('_form.tpl', [
        'model' => $model,
        'category' => $category
    ])}

</div>
