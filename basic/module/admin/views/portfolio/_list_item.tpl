{use class="app\helpers\ImageHelper"}
{use class="yii\helpers\Html"}
<div class="col-xs-12">
    {Html::a('<span aria-hidden="true">&times;</span>', ['delete', 'id' => $model->id], [
        'title' => 'Удалить',
        'data' => [
            'method' => 'post'
        ],
        'class' => 'close'
    ])}
</div>
<div class="col-xs-12">
    <div class="row">
        <div class="col-md-2">
            <img src="{ImageHelper::getImage($model, '200x')}" alt="" class="img-rounded img-responsive center-block mb-20">
        </div>
        <div class="col-md-10">
            <div class="form-group">
                <label for="inputCategory" class="control-label">Категория</label>
                <input type="text" class="form-control" id="inputCategory" placeholder="Category" value="{$model->categoryName}">
            </div>
            <div class="form-group">
                <label for="inputTitle" class="control-label">Заголовок</label>
                <input type="text" class="form-control" id="inputTitle" placeholder="Заголовок" value="{$model->title}">
            </div>
            <div class="form-group">
                <label for="inputDescription" class="control-label">Описание</label>
                <textarea name="" id="inputDesciption" class="form-control" cols="30" placeholder="Описание" rows="3">{$model->description}</textarea>
            </div>
        </div>
    </div>
</div>



{*<li class="js-item" data-id="106">*}
    {*<div class="img">*}
        {*<img src="{ImageHelper::getImage($model, '200x')}" alt="">*}
        {*<a class="button trash js-trash" href="javascript:void(0);"><i class="flaticon-trash3"></i> В корзину</a>*}
        {*<span class="edit-img" data-id="106"><i class="flaticon-photo7"></i> Изменить миниатюру</span>*}
    {*</div>*}
  {*<span>*}
    {*<b>Заголовок: </b><br>*}
    {*<input class="input-edit js-title" type="text" value="{$model->title}" size="60" placeholder="Без заголовка">*}
    {*<span>*}
      {*<span class="status-field-edit js-title-status-edit"><i class="flaticon-edit4"></i> Редактирование...</span>*}
      {*<span class="status-field-save js-title-status-save"><i class="flaticon-upload8"></i> Сохранение...</span>*}
    {*</span><br>*}
    {*<span class="select">*}
      {*<b>Категория: </b><br>*}
      {*<a href="javascript:void(0);" class="slct js-select">Шкафы-купе<i class="flaticon-chevron8"></i></a>*}
      {*<span class="status-fields">*}
        {*<span class="status-field-edit js-select-status-edit" style="display: none;"><i class="flaticon-edit4"></i> Редактирование...</span>*}
        {*<span class="status-field-save js-select-status-save" style="display: none;"><i class="flaticon-upload8"></i> Сохранение...</span>*}
      {*</span>*}
      {*<ul class="drop js-select-list" data-id="106" style="display: none;">*}
          {*<li></li>*}
          {*<li class="active">Шкафы-купе</li>*}
          {*<li>Кухни</li>*}
          {*<li class="">Детские</li>*}
          {*<li>Окна</li>*}
          {*<li>Двери</li>*}
          {*<li>Прихожие</li>*}
          {*<li>Арки</li>*}
          {*<li>Без категории</li>*}
      {*</ul>*}
    {*</span>*}
  {*</span>*}
    {*<div class="clr"></div>*}
{*</li>*}