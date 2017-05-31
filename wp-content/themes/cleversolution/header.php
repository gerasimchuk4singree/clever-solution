<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Clever Solution
 * @since Clever Solution 1.0
 */
?>

<!DOCTYPE html>
<!--[if lt ie 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if ie 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if ie 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt ie 8]><!-->
<html <?php language_attributes(); ?> class="no-js"> <!--<![endif]-->
<head>
    <link rel="icon" href="https://clever-solution.com/wp-content/uploads/2015/12/favicon-32x32.png"
          type="image/x-icon"/>
    <link rel="shortcut icon" href="https://clever-solution.com/wp-content/uploads/2015/12/favicon-32x32.png"
          type="image/x-icon"/>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <?php if (is_front_page()) : ?>
        <meta property="fb:admins" content="100011437554378"/>
	<meta property="fb:pages" content="359192134262606" />
	<meta name="twitter:site" content="@SolutionClever">
    <?php endif; ?>
    <link rel="me" href="https://twitter.com/SolutionClever"/>
    <meta name="description" content="">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/grid.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/skin.css?ver=1.1.8" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/owl.carousel.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/lightbox.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/pushy.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/font-awesome.min.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/jquery.fullPage.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/jquery.fullPage.css" rel="stylesheet">
    <script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.7.1.min.js"></script>
    <!--[if gt ie 8]><!-->
    <script src="<?php echo get_template_directory_uri(); ?>/js/minify.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.11.0.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.mousewheel.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/lightbox.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.scrollbar.js"></script>
    <?php if (is_front_page()) : ?>
        <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fullPage.js"></script>
    <?php endif; ?>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.growl.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/core.js"></script>
    <!--<![endif]-->
    <?php if (is_category('blog') || in_category('blog')) : ?>
        <link href="<?php echo get_template_directory_uri(); ?>/css/blog.css?ver=1.1.3" rel="stylesheet">
    <?php endif; ?>


    <?php if (is_page(110)) : ?>
        <link href="<?php echo get_template_directory_uri(); ?>/css/landing-medical.css" rel="stylesheet">
        <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fittext.js"></script>
        <noscript>
            <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/mobile.min.css"/>
        </noscript>
        <script>
            // Edit to suit your needs.
            var ADAPT_CONFIG = {
                // Where is your CSS?
                path: '<?php echo get_template_directory_uri(); ?>/assets/css/',

                // false = Only run once, when page first loads.
                // true = Change on window resize and page tilt.
                dynamic: true,

                // First range entry is the minimum.
                // Last range entry is the maximum.
                // Separate ranges by "to" keyword.
                range: [
                    '0px    to 760px  = mobile.min.css',
                    '760px  to 980px  = 720.min.css',
                    '980px  to 1280px = 960.min.css',
                    '1280px to 1600px = 1200.min.css',
                    '1600px to 1940px = 1200.min.css',
                    '1940px to 2540px = 1200.min.css',
                    '2540px           = 1200.min.css'
                ]
            };
        </script>
        <script src="<?php echo get_template_directory_uri(); ?>/assets/js/adapt.min.js"></script>
    <?php endif; ?>

    <?php wp_head(); ?>


    <!-- Facebook Pixel Code -->
    <script>
        !function (f, b, e, v, n, t, s) {
            if (f.fbq)return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '620406811497362', {
            em: 'insert_email_variable,'
        });
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=620406811497362&ev=PageView&noscript=1"
        /></noscript>
    <!-- DO NOT MODIFY -->
    <!-- End Facebook Pixel Code -->


    <meta name="twitter:card" content="summary_large_image">

</head>
<body <?php body_class(); ?>>
<!-- <div><img src="/wp-content/uploads/2016/11/black-friday.jpg" style="width: 100%"> </div>-->
<?php if (is_category('blog') || in_category('blog')) : ?>
    <div id="fb-root"></div>
    <script>(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.6";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
<?php endif; ?>


<div class="js-float-menu">
    <?php
    //if (is_front_page()) {
    if (function_exists("wp_nav_menu")) {
        wp_nav_menu(array(
            'theme_location' => 'home',
            'walker' => new True_Walker_Nav_Menu(), // for customization menu
            'container' => 'nav',
            'container_class' => 'floatnav',
            'menu_class' => 'clear-ul inline-ul relative',
            'menu_id' => 'myMenu',
            'depth' => 1
        ));
    }
    //} else {
    //            if ( function_exists( "wp_nav_menu" ) ) {
    //                wp_nav_menu( array(
    //                    'theme_location'  => 'primary',
    //                    'walker'          => new True_Walker_Nav_Menu(), // for customization menu
    //                    'container'       => 'nav',
    //                    'container_class' => 'floatnav',
    //                    'menu_class'      => 'clear-ul inline-ul relative',
    //                    'menu_id'         => 'myMenu',
    //                    'depth'           => 1
    //                ) );
    //            }
    //}
    ?>
</div>
<div id="page-preloader" style="position: fixed; width: 100%;height: 100%; background: #0066cc; z-index: 9999999">
    <img src="<?php echo get_template_directory_uri(); ?>/images/brain-preloader.gif?rand=<?= rand(1, 1000); ?>" alt=""
         style="position: absolute; top: 50%; left: 0; right: 0; margin: -166px auto 0 auto; z-index: 99999999">
</div>
<div class="contect-form index-300 cl-white js-eleport-20">
    <div onclick="opencloseform();" class="contact-form-title pointer">
        <a href="javascript:void(0);" class="no-underline cl-white">
            <i class="i-mail"></i> Contact Us
        </a>
    </div>
    <div class="index-200 relative bg-orange island-20 b-radius-10">
        <div class="contect-form-top-inform">
            <a href="mailto:info@clever-solution.com" class="font-28 no-underline cl-white">info@clever-solution.com</a>
            <div class="contect-form-tel">
                <p class="p font-28">+1 855 233 0007</p>
<!--                <p class="p font-28 marg-bot-20">+1 212 372 7649</p>-->
            </div>
        </div>

<!--        <ul class="social clear-ul inline-ul right">-->
<!--            <li><a href="https://twitter.com/SolutionClever" target="_blank" class="block"><i class="anim-svg"-->
<!--                                                                                              data-img="tw.png"></i></a>-->
<!--            </li>-->
<!--            <li><a href="https://www.facebook.com/cleverrsolution" target="_blank" class="block"><i class="anim-svg"-->
<!--                                                                                                    data-img="fb.png"></i></a>-->
<!--            </li>-->
<!--            <li><a href="https://www.youtube.com/channel/UC4E8u6X9NBa5vaVUTRUfk4A" target="_blank" class="block"><i-->
<!--                            class="anim-svg" data-img="yt.png"></i></a></li>-->
<!--            <li><a href="https://plus.google.com/108338275560050650584/about" target="_blank" class="block"><i-->
<!--                            class="anim-svg" data-img="gp.png"></i></a></li>-->
<!--            <li><a href="http://www.yelp.com/biz/clever-solution-inc-new-york" target="_blank" class="block"><i-->
<!--                            class="anim-svg" data-img="yelp.png"></i></a></li>-->
<!--        </ul>-->

        <p class="contact-form-name p font-24 light">Get your Clever Solution</p>

        <?php echo do_shortcode('[contact-form-7 id="100" title="Contact form 2" html_name="cleversolution-form-100"]'); ?>

    </div>
</div>

<?php
if (!is_front_page()) : ?>
    <address class="c x2d12 island-v10 head-telephones cl-white" style="display:none">

        <p class="p">+1 855 233 0007</p>
<!--        <p class="p marg-bot-20">+1 212 372 7649</p>-->

        <ul class="social clear-ul inline-ul js-eleport-19">
            <li><a href="https://twitter.com/SolutionClever" target="_blank" class="block"><i class="anim-svg"
                                                                                              data-img="tw.png"></i></a>
            </li>
            <li><a href="https://www.facebook.com/cleverrsolution" target="_blank" class="block"><i class="anim-svg"
                                                                                                    data-img="fb.png"></i></a>
            </li>
            <li><a href="https://www.youtube.com/channel/UC4E8u6X9NBa5vaVUTRUfk4A" target="_blank" class="block"><i
                            class="anim-svg" data-img="yt.png"></i></a></li>
            <li><a href="https://plus.google.com/108338275560050650584/about" target="_blank" class="block"><i
                            class="anim-svg" data-img="gp.png"></i></a></li>
            <li><a href="http://www.yelp.com/biz/clever-solution-inc-new-york" target="_blank" class="block"><i
                            class="anim-svg" data-img="yelp.png"></i></a></li>
        </ul>
    </address>

    <div class="hide-on-desc mob-menu">
        <a href="/">
            <div class="js-mobile-menu-button intbutton-2" data-num="1"><span>Home</span></div>
        </a>
        <a href="/design">
            <div class="js-mobile-menu-button intbutton-3" data-num="3"><span>Design</span></div>
        </a>
        <a href="/development">
            <div class="js-mobile-menu-button intbutton-4" data-num="4"><span>Development</span></div>
        </a>
        <a href="/digital-marketing">
            <div class="js-mobile-menu-button intbutton-5" data-num="5"><span>Digital Marketing</span></div>
        </a>
        <a href="/integrated">
            <div class="js-mobile-menu-button intbutton-6" data-num="6"><span>Integrated</span></div>
        </a>
        <a href="/ecommerce">
            <div class="js-mobile-menu-button intbutton-7" data-num="7"><span>eCommerce</span></div>
        </a>
        <a href="/niche">
            <div class="js-mobile-menu-button intbutton-8" data-num="8"><span>Niche</span></div>
        </a>
        <a href="/additional">
            <div class="js-mobile-menu-button intbutton-9" data-num="9"><span>Additional</span></div>
        </a>
        <a href="/who-we-are">
            <div class="js-mobile-menu-button intbutton-10" data-num="10"><span>Who We Are</span></div>
        </a>
        <a href="/blog">
            <div class="js-mobile-menu-button intbutton-blog" data-num="10"><span>Blog</span></div>
        </a>
    </div>
<?php endif; ?>

<div id="main" class="site-main">
<!--    <nav class="pushy pushy-left mob-menu">-->
<!--        <div class="pushy-content">-->
<!--            --><?php //$menu = wp_nav_menu(array('theme_location' => 'new-menu', 'menu_class' => 'head_nav_list', 'container' => 'false', 'echo' => 0,));
//            //                $menu = str_replace('class="menu-item', 'class="open_drop', $menu );
//            $menu = str_replace('class="sub-menu', 'class="dop-menu', $menu);
//            echo($menu);
//            ?>
<!--        </div>-->
<!--    </nav>-->

    <nav class="pushy pushy-left mob-menu">
        <div class="pushy-content">
            <a href="/home" class="logo-mob">
                <img class="hidden-logo-xs" src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/logo.png"
                     alt="">
                <img class="visible-logo-xs"
                     src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/mini-logo.png" alt="">
            </a>
            <ul>
                <?php $menu = wp_nav_menu(array('theme_location' => 'new-menu', 'menu_class' => 'mob-menu', 'container' => 'false', 'echo' => 0,));
                $menu = str_replace('class="sub-menu', 'class="dop-menu', $menu);
                echo($menu);
                ?>
            </ul>
            <a href="#" class="contact-us">Contact Us</a>
            <div class="social">
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/twitter.png" alt="">
                </a>
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/google.png" alt="">
                </a>
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/youtube.png" alt="">
                </a>
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/facebook.png" alt="">
                </a>
            </div>
            <button class="close-mob-menu">
                <span class="icon">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
                <span class="span txt">Close</span>
            </button>
        </div>
    </nav>
    <div id="container">
        <!-- Menu Button -->
        <div class="menu-btn-block">
            <div class="social">
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/twitter.png" alt="">
                </a>
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/google.png" alt="">
                </a>
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/youtube.png" alt="">
                </a>
                <a href="#">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/mob-menu/facebook.png" alt="">
                </a>
            </div>
            <div class="menu-btn">
                <span class="icon">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </span>
                <span class="name">Open</span>
            </div>
        </div>
    </div>
