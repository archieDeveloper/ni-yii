<?php

use \yii\widgets\Menu;
use \yii\widgets\ListView;

/* @var $this yii\web\View */
/* @var $categories array */
/* @var $portfolio yii\data\ActiveDataProvider */

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
        <div class="wrap-products">
<!--            <ul class="pagination">-->
<!--                --><?php //pagination($_GET['page'], $num_pages); ?>
<!--                --><?php //if(isset($count_portfolio) && $count_portfolio['to'] > 1): ?>
<!--                    <li class="count-elem">-->
<!--                        Показано работ с --><?//=$count_portfolio['from']?><!-- по --><?//=$count_portfolio['to']?>
<!--                    </li>-->
<!--                --><?php //endif; ?>
<!--                <div class="cleaner"></div>-->
<!--            </ul>-->
            <div id="portfolio-container">
                <?php echo ListView::widget([
                    'dataProvider' => $portfolio,
                    'itemView' => '_list_item'
                ]); ?>
            </div>
            <div class="cleaner"></div>
<!--            <ul class="pagination">-->
<!--                --><?php //pagination($_GET['page'], $num_pages); ?>
<!--                --><?php //if(isset($count_portfolio) && $count_portfolio['to'] > 1): ?>
<!--                    <li class="count-elem">-->
<!--                        Показано работ с --><?//=$count_portfolio['from']?><!-- по --><?//=$count_portfolio['to']?>
<!--                    </li>-->
<!--                --><?php //endif; ?>
<!--                <div class="cleaner"></div>-->
<!--            </ul>-->
            <div class="cleaner"></div>
        </div>
        <?php /* if (isset($current_product) && $current_product) : ?>
            <div id="current_product" data-id="<?=$current_product->id?>" data-img="<?=$current_product->img?>" data-title='<?=$current_product->title?>'></div>
        <?php endif; */ ?>
        <div class="cleaner"></div>
    </div>
</div>
