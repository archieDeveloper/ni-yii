<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/styles/all.min.css<?='?v' . VERSION_SITE?>">
    <link rel="stylesheet" type="text/css" href="/fonts/boblic/boblic.css">
    <link rel="stylesheet" type="text/css" href="/styles/flaticon.css<?='?v' . VERSION_SITE?>">

    <script type="text/javascript" src="/js/lib/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery-ui-1.10.4.custom.min.js"></script>

    <script type="text/javascript" src="/js/lib/jquery.mousewheel-3.0.6.pack.js"></script>

    <script type="text/javascript" src="/js/lib/inputmask.min.js"></script>
    <script type="text/javascript" src="/js/lib/jquery.inputmask.min.js"></script>

    <link rel="stylesheet" type="text/css" href="/fancybox/jquery.fancybox.css<?='?v' . VERSION_SITE?>" media="screen" />
    <script type="text/javascript" src="/fancybox/jquery.fancybox.pack.js<?='?v' . VERSION_SITE?>"></script>

    <?php if (isset($slider_boolean)) : ?>
        <link rel="stylesheet" type="text/css" href="/styles/lib/swiper.min.css<?='?v' . VERSION_SITE?>" />
        <script type="text/javascript" src="/js/lib/swiper.min.js<?='?v' . VERSION_SITE?>"></script>

        <script type="text/javascript" src="/js/swiper.js<?='?v' . VERSION_SITE?>"></script>
    <?php endif; ?>

    <script type="text/javascript" src="/js/lib/isotope.pkgd.min.js<?='?v' . VERSION_SITE?>"></script>

    <link type="text/css" rel="stylesheet" href="/styles/lib/animate.css<?='?v' . VERSION_SITE?>">
    <script type="text/javascript" src="/js/lib/jquery.aniview.min.js<?='?v' . VERSION_SITE?>"></script>

    <script type="text/javascript" src="/js/fun.js<?='?v' . VERSION_SITE?>"></script>
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
    <meta content="/img/share_logo.png" property="og:image">
    <meta charset = "utf-8">

    <meta name="keywords" content="<?=$page_info->keywords?>" />
    <meta name="description" content="<?=$page_info->description?>" />
    <meta name='yandex-verification' content='553ab0d7f9c8ef13' />

    <title><?=$page_info->title?> | Новый Интерьер</title>
</head>

<body>

<div id="page-up"></div>
<div id="black_fon"></div>

<div id="form_obr">
    <div id="form_obr_close"><i class="flaticon-cross5"></i></div>
    <div id="order_form_title"><h2>Обратный звонок</h2></div>
    <div id="bobo"><div style='display:none;' id='status'></div></div>
    <form id="order_form" method="post">
        <div><label for="name">Ваше имя:</label> <input style="float:right; width: 380px;" type="text" name="name" id="name" required><div class="cleaner"></div></div>
        <div><label for="number">Телефон:</label> <input style="float:right; width: 380px;" type="text" name="number" id="number" required><div class="cleaner"></div></div>
        <div><label style="width: 121px;">Желаемое время:</label>
            <span class="select-prev">с</span>
      <span class="select" id="start_time">
        <a href="javascript:void(0);" class="slct"><span>10</span><i class="flaticon-chevron8"></i></a>
        <ul class="drop" data-id="1">
            <li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li>
        </ul>
        <div class="cleaner"></div>
      </span>
            <span class="select-prev">до</span>
      <span class="select" id="end_time">
        <a href="javascript:void(0);" class="slct"><span>11</span><i class="flaticon-chevron8"></i></a>
        <ul class="drop" data-id="1">
            <li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li>
        </ul>
        <div class="cleaner"></div>
      </span>
        </div>
        <button style="float:right;" class="button" name="add_callback">Заказать</button>
    </form>
</div>

<div id="obr_sv" class="obr_sv">
    <span>Есть вопросы<br>Закажите обратный звонок</span>
    <img src="/img/elem/callback_button.png" alt=""/>
</div>

<div id="header_wrap">
    <header id="header">
        <h1><a href="/"><img id="logo" src="/img/logo-ni.png<?='?v' . VERSION_SITE?>">Новый Интерьер</a></h1>
        <div id="info_head">
            <span><b>Часы работы:</b> с 10:00 до 19:00</span><br>
            <span><b>Телефон:</b> +7 (951) 226-25-96</span><br>
            <span><b>Адрес:</b> г.Новокузнецк пр.Запсибовцев, д. 39</span>
        </div>
        <div class="cleaner"></div>
    </header>
    <nav id="nav">
        <ul>
            <?php foreach ($page_list as $value): if($value->show_nav):?>
                <?php switch ($value->type): case "template": ?>
                    <li <?php if($value->id == 5){ echo 'class="end-list"'; } ?>><a href="/<?=$value->name;?><?php if (!empty($value->name)) : echo '.html'; endif;?>" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_active"';} ?>><?=$value->title;?></a></li>
                    <?php break; case "page": ?>
                    <li <?php if($value->id == 5){ echo 'class="end-list"'; } ?>><a href="/<?=$value->name;?>.html" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_active"';} ?>><?=$value->title;?></a></li>
                    <?php break; endswitch; ?>
            <?php endif; endforeach; ?>
            <?php /*<a class="auction" href="/auctions.html">Аукцион<span>new</span></a>*/ ?>
        </ul>
        <div class="cleaner"></div>
    </nav>
    <?php if (isset($slider_boolean)) : ?>
        <div class="swiper-container" id="slides">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="wrap-center absolute">
                        <div class="desc-slide left">
                            <span class="pink">Запишись на <b>бесплатный замер</b></span>
                        </div>
                        <div class="cleaner"></div>
                        <div class="desc-slide center">
                            <div class="black transparent">
                                <form action="/" class="form">
                                    <label for="name">Как к Вам обращаться?</label>
                                    <input name="name" type="text"/>

                                    <label for="number">На какой номер перезвонить?</label>
                                    <input name="number" type="text"/>

                                    <label for="time">Желаемое время замера</label>
                                    <div>
                                        <span class="select-prev">с</span>
                    <span class="select" name="start_time">
                      <a href="javascript:void(0);" class="slct"><span>10</span><i class="flaticon-chevron8"></i></a>
                      <ul class="drop" data-id="1" style="display: none;">
                          <li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li>
                      </ul>
                      <div class="cleaner"></div>
                    </span>
                                        <span class="select-prev">до</span>
                    <span class="select" name="end_time">
                      <a href="javascript:void(0);" class="slct"><span>11</span><i class="flaticon-chevron8"></i></a>
                      <ul class="drop" data-id="1" style="">
                          <li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li>
                      </ul>
                      <div class="cleaner"></div>
                    </span>
                                    </div>
                                    <button style="float: right;" class="button think white froze">Записаться</button>
                                    <div class="cleaner"></div>
                                </form>
                            </div>
                        </div>
                        <div class="cleaner"></div>
                        <div class="desc-slide right">
                            <span class="gray">Получи дизайн-проект в <b>подарок</b></span>
                        </div>
                    </div>
                    <div class="slide-img" style="background-image: url(/img/slider/slide1.png);"></div>
                </div>
                <div class="swiper-slide">
                    <div class="wrap-center absolute">
                        <div class="desc-slide center">
                            <span class="payment">Рассрочка<br>0%</span>
                        </div>
                    </div>
                    <div class="slide-img" style="background-image: url(/img/slider/slide2.png);"></div>
                </div>
                <div class="swiper-slide">
                    <div class="wrap-center absolute">
                        <div class="desc-slide">
                            <span class="pink">Экономьте свое <b>время</b></span><br>
                            <span class="gray">Закажите обратный звонок — мы ответим на интерисующие Вас вопросы!</span>
                        </div>
                        <div class="cleaner"></div>
                        <div class="desc-slide right">
                            <button class="button big obr_sv" style="margin-top: 100px">Заказать обратный звонок <i class="flaticon-phone14"></i></button>
                        </div>
                    </div>
                    <div class="slide-img" style="background-image: url(/img/slider/slide3.jpg);"></div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    <?php endif; ?>
</div>
<div id="content_wrap">

</div>
<div id="footer_wrap">
    <footer id="footer">
        <nav>
            <ul class="footer_nav">
                <span>Меню</span>
                <?php foreach ($page_list as $value): if($value->show_footer):?>
                    <?php switch ($value->type): case "template": ?>
                        <li><a href="/<?=$value->name;?><?php if (!empty($value->name)) : echo '.html'; endif;?>" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_footer_active"';} ?>><?=$value->title;?></a></li>
                        <?php break; case "page": ?>
                        <li><a href="/<?=$value->name;?>.html" <?php if($value->id == $page_info->id || $value->id == $page_info->parent) {echo 'id="nav_footer_active"';} ?>><?=$value->title;?></a></li>
                        <?php break; endswitch; ?>
                <?php endif; endforeach; ?>
            </ul>

            <ul class="footer_nav">
                <span>Каталог</span>
                <?php foreach ($list_category_portfolio as $item) : ?>
                    <?php if ($item->link != 'no-category') : ?>
                        <li <?php if(isset($category) && $item->link == $category) { echo 'class="active"'; } ?>><a href="/portfolio/category/<?=$item->link?>.html"><?=$item->name?></a></li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <ul class="footer_nav">
                <span>Информация</span>
                <li><a href="/">Карта сайта</a></li>
                <li><a href="/portfolio.html">Политика</a></li>
                <li><a href="/contacts.html#feedback">Обратная связь</a></li>
                <li><a href="/">Вакансии</a></li>
                <li><a href="/portfolio.html">Сотрудничество</a></li>
            </ul>
        </nav>
        <div id="soc_seti">
            <div class="addthis_toolbox" id="social_block">
                <div id="addthis_toolbox_share" class="text">
                    <p>Следуйте за нами в соц. сетях</p>
                </div>
                <div class="soc-icons">
                    <a href="http://vk.com/newinterer" class="vk-icon"></a>
                    <a href="http://odnoklassniki.ru/group/54243398516741" class="ok-icon"></a>
                </div>
                <div class="cleaner"></div>
                <p style="margin:15px 0 0 0;">+7 (951) 226-25-96</p>
                <p>Часы работы: с 10:00 до 19:00</p>
            </div>
        </div>
    </footer>
    <div class="copyright">Новый Интерьер <?php echo date('Y'); ?>г. Все права защищены.</div>
</div>

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter30625307 = new Ya.Metrika({id:30625307,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    trackHash:true});
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/30625307" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-63833515-1', 'auto');
    ga('send', 'pageview');

</script>

</body>
</html>