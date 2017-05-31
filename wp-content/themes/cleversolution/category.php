<?php
/**
 * The template for displaying Category pages
 *
 */

get_header(); ?>

    <div class="allscreens blog">

        <div class="hide-on-desc">
            <div class="js-mobile-menu-button js-active intbutton-11" data-num="11"><span><?php echo single_cat_title( '', false ); ?></span></div>
        </div>

		<?php if ( have_posts() ) : ?>
        <div id="blog-list">
            <div  class="js-blog-packery relative">
                <div class="item h2 blog-header">
                    <div class="h1-header">
                        <div class="title-block">our <span>BLOG</span></div>
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

                <?php /* The loop */ ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <?php get_template_part( 'content', get_post_format() ); ?>
                <?php endwhile; ?>

            </div>
        </div>

			<?php twentythirteen_paging_nav(); ?>

		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>

	</div><!-- .allscreens -->

<?php //get_sidebar(); ?>

    <script type="text/javascript">

        setTimeout(function () {
            hideform(false);
        }, 500);

    </script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/packery.pkgd.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-numerator.js"></script>

    <?php
        $count_posts = wp_count_posts();
        $published_posts = $count_posts->publish;
        $count_comments = get_comment_count();
        $comments  = $count_comments['approved'];
    ?>
    <script type="text/javascript">
        var $grid = $('.js-blog-packery').packery({
            "itemSelector": ".item",
            "gutter": 12
        });

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

       // $('.imagefill img').removeAttr('height');
    </script>

<?php get_footer(); ?>