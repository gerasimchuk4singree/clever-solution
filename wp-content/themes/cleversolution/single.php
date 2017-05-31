<?php
/**
 * The template for displaying all single posts
 *
 */

get_header(); ?>

    <div class="allscreens blog">

        <div class="hide-on-desc">
            <div class="js-mobile-menu-button js-active intbutton-11" data-num="11"><span>Blog</span></div>
        </div>

            <div id="blog-list">
                <aside id="left-sidebar">
                    <div class="item h2 blog-header">
                        <div class="h1-header">
                            <a href ="/blog">
                                <div class="title-block">our <span>BLOG</span></div>
                            </a>
                        </div>
                        <div class="marg-lr-10 marg-10 hide-on-desc">
                            <img class="wfull" src="<?php echo get_template_directory_uri(); ?>/images/blog/blog-mobil.jpg" alt="our BLOG" />
                        </div>
                        <div class="float-r marg-right-10 font-30">
                            <div class="mob-right">
                                <p id="posts-counter" class="font-65 no-margin">0</p>
                                <p class="font-60 marg-top-0 marg-bot-30">posts</p>
                            </div>
                            <br>
                            <div class="mob-left">
                                <p id="comments-counter" class="font-44 no-margin">0</p>
                                <p class="no-margin">comments</p>

                                <div class="blog-social-share hide-on-mobile">
                                    <div class="blog-social-share-title">
                                        Share
                                    </div>
                                    <div class="blog-social-share-links">
                                        <a class="social_share" data-type="fb" href="javascript:void(0)">
                                            <i class="fontello-icon icon-facebook-squared">&#xe805;</i>
                                        </a>
                                        <a class="social_share" data-type="pp" href="javascript:void(0)">
                                            <i class="fontello-icon icon-pinterest-squared">&#xe803;</i>
                                        </a>
                                        <a class="social_share" data-type="li" href="javascript:void(0)">
                                            <i class="fontello-icon icon-linkedin-squared">&#xe804;</i>
                                        </a>
                                        <a class="social_share" data-type="gp" href="javascript:void(0)">
                                            <i class="fontello-icon icon-gplus-squared">&#xe801;</i>
                                        </a>
                                        <a class="social_share" data-type="tw" href="javascript:void(0)">
                                            <i class="fontello-icon icon-twitter-squared">&#xe802;</i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="blog-facebook-widget hide-on-mobile">
                        <div class="fb-page"
                             data-href="https://www.facebook.com/cleverrsolution"
                             data-tabs="timeline"
                             data-width="435"
                             data-small-header="false"
                             data-adapt-container-width="true"
                             data-hide-cover="false"
                             data-show-facepile="true">
                        </div>
                    </div>
                </aside>

                <?php /* The loop */ ?>
                <?php while ( have_posts() ) : the_post(); ?>

                    <?php get_template_part( 'content-post', get_post_format() ); ?>
                    <?php //twentythirteen_post_nav(); ?>
                    <?php comments_template(); ?>

                <?php endwhile; ?>

            </div>

    </div><!-- .allscreens -->

    <script type="text/javascript">

        setTimeout(function () {
            hideform(false);
        }, 500);

    </script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-numerator.js"></script>

<?php
$count_posts = wp_count_posts();
$published_posts = $count_posts->publish;
$count_comments = get_comment_count();
$comments  = $count_comments['approved'];
?>
    <script type="text/javascript">
        $('#posts-counter').numerator( {
            easing: 'swing',
            duration: 3000,
            delimiter: 0,
            rounding: 0,
            toValue: <?php echo $published_posts; ?>,
            fromValue: 0,
        } );

        $('#comments-counter').numerator( {
            easing: 'swing',
            duration: 3000,
            delimiter: 0,
            rounding: 0,
            toValue: <?php echo $comments;?>,
            fromValue: 0,
        } );

    </script>

<?php //get_sidebar(); ?>
<?php get_footer(); ?>