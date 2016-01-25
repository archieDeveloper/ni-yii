<?php

use yii\widgets\Menu;

/* @var $this yii\web\View */
/* @var $categories array */

?>
<div class="wrap">
    <div class="wrap-center">
        <div class="left-aside">
            <span>Категории</span>
            <ul>
                <?php echo Menu::widget([
                    'items' => $categories
                ]); ?>
            </ul>
        </div>
        <?php /*<div class="wrap-products">
            <ul class="pagination">
                <?php pagination($_GET['page'], $num_pages); ?>
                <?php if(isset($count_portfolio) && $count_portfolio['to'] > 1): ?>
                    <li class="count-elem">
                        Показано работ с <?=$count_portfolio['from']?> по <?=$count_portfolio['to']?>
                    </li>
                <?php endif; ?>
                <div class="cleaner"></div>
            </ul>
            <div id="portfolio-container">
                <?php foreach ($portfolio as $product) :?>
                    <article class="wrap-product">
                        <a rel="<?=$product->link?>" href="/img/portfolio/big/<?=$product->img?>" data-id='<?=$product->id?>' title='<?=$product->title?>'>
                            <img class="view-icon" src="/img/elem/zoomin.png" alt="<?=$product->title?>">
                            <img src="/img/portfolio/small/<?=$product->img?>" alt="Полный размер изображения">
                            <span><?=$product->title?></span>
                        </a>
                    </article>
                <?php endforeach; ?>
            </div>
            <div class="cleaner"></div>
            <ul class="pagination">
                <?php pagination($_GET['page'], $num_pages); ?>
                <?php if(isset($count_portfolio) && $count_portfolio['to'] > 1): ?>
                    <li class="count-elem">
                        Показано работ с <?=$count_portfolio['from']?> по <?=$count_portfolio['to']?>
                    </li>
                <?php endif; ?>
                <div class="cleaner"></div>
            </ul>
            <div class="cleaner"></div>
        </div>
        <?php if (isset($current_product) && $current_product) : ?>
            <div id="current_product" data-id="<?=$current_product->id?>" data-img="<?=$current_product->img?>" data-title='<?=$current_product->title?>'></div>
        <?php endif; ?>
        <div class="cleaner"></div>
        */ ?>
    </div>
</div>
