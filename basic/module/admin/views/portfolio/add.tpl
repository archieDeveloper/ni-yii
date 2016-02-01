{use class="yii\widgets\ActiveForm" type='block'}
{use class="yii\helpers\Html"}
<h2>{$this->title}</h2>
{ActiveForm assign='form' options = [
    'class' => 'form-horizontal',
    'enctype' => 'multipart/form-data'
]}
    {$form->field($model, 'image')->fileInput()}
    {$form->field($model, 'title')->textInput(['class' => 'input-edit'])}
    {$form->field($model, 'description')->textArea(['class' => 'input-edit'])}
    <div class="form-actions">
        {Html::submitButton('<i class="flaticon-plus13"></i> Добавить работу', ['class' => 'button green'])}
    </div>
{/ActiveForm}