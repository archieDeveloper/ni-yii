<li class="js-item" data-id="106">
    {print_r($model->getImage())}
    <div class="img">
        <img src="{if $model->img}{$model->img->getUrl('200x')}{/if}" alt="">
        <img src="{if $model->img}{$model->img->getUrl('200x')}{/if}" alt="">
        <img src="{if $model->img}{$model->img->getUrl('200x')}{/if}" alt="">
        <img src="{if $model->img}{$model->img->getUrl('200x')}{/if}" alt="">
        <img src="{if $model->img}{$model->img->getUrl('200x')}{/if}" alt="">
        <img src="{if $model->img}{$model->img->getUrl('200x')}{/if}" alt="">
        <a class="button trash js-trash" href="javascript:void(0);"><i class="flaticon-trash3"></i> В корзину</a>
        <span class="edit-img" data-id="106"><i class="flaticon-photo7"></i> Изменить миниатюру</span>
    </div>
  <span>
    <b>Заголовок: </b><br>
    <input class="input-edit js-title" type="text" value="{$model->title}" size="60" placeholder="Без заголовка">
    <span>
      <span class="status-field-edit js-title-status-edit"><i class="flaticon-edit4"></i> Редактирование...</span>
      <span class="status-field-save js-title-status-save"><i class="flaticon-upload8"></i> Сохранение...</span>
    </span><br>
    <span class="select">
      <b>Категория: </b><br>
      <a href="javascript:void(0);" class="slct js-select">Шкафы-купе<i class="flaticon-chevron8"></i></a>
      <span class="status-fields">
        <span class="status-field-edit js-select-status-edit" style="display: none;"><i class="flaticon-edit4"></i> Редактирование...</span>
        <span class="status-field-save js-select-status-save" style="display: none;"><i class="flaticon-upload8"></i> Сохранение...</span>
      </span>
      <ul class="drop js-select-list" data-id="106" style="display: none;">
          <li></li>
          <li class="active">Шкафы-купе</li>
          <li>Кухни</li>
          <li class="">Детские</li>
          <li>Окна</li>
          <li>Двери</li>
          <li>Прихожие</li>
          <li>Арки</li>
          <li>Без категории</li>
      </ul>
    </span>
  </span>
    <div class="clr"></div>
</li>