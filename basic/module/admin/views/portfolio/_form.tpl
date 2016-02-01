{use class="yii\helpers\Html"}
{use class="yii\helpers\ArrayHelper"}
{use class="yii\widgets\ActiveForm" type="block"}
<div class="portfolio-form">
    {ActiveForm assign='form' options = [
        'class' => 'form-horizontal',
        'enctype' => 'multipart/form-data'
    ]}
        {$form->field($model, 'image')->fileInput()}
        {$form->field($model, 'category_id')->dropDownList(
            ArrayHelper::map($category, 'id', 'name'), ['class' => 'input-edit']
        )}
    {$form->field($model, 'title')->textInput(['class' => 'input-edit'])}
        {$form->field($model, 'description')->textArea(['class' => 'input-edit'])}
        <div class="form-group">
            {Html::submitButton('<i class="flaticon-plus13"></i> Добавить работу', ['class' => 'button green'])}
        </div>
    {/ActiveForm}
</div>
