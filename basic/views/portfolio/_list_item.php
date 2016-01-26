<?php

/* @var $model \app\models\Portfolio */

?>

<article class="wrap-product">
    <a rel="<?=$model->category->link?>" href="/img/portfolio/big/<?php /*$model->img*/ ?>" data-id='<?=$model->id?>' title='<?=$model->title?>'>
        <img class="view-icon" src="/img/elem/zoomin.png" alt="<?=$model->title?>">
        <img src="/img/portfolio/small/<?php /*$model->img*/ ?>" alt="Полный размер изображения">
        <span><?=$model->title?></span>
    </a>
</article>