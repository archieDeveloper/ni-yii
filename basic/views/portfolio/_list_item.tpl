<article class="wrap-product">
    <a rel="{$model->category->link}" href="{$model->getImage()->getUrl()}" data-id='{$model->id}' title='{$model->title}'>
        <img class="view-icon" src="/images/ui/zoomin.png" alt="{$model->title}">
        <img src="{$model->getImage()->getUrl('217x')}" alt="Полный размер изображения">
        <span>{$model->title}</span>
    </a>
</article>