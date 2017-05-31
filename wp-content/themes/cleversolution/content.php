<?php
/**
 * The default template for displaying content
 *
 */
?>
<?php
    $has_post_thumbnail = ( has_post_thumbnail() )? true : false;
    $double_width_preview = ( get_field('double_width_preview') )? true : false;
?>

<a href="<?php the_permalink(); ?>" class="item <?php the_field('post_background_color'); if(!$has_post_thumbnail) echo " no-image"; if($double_width_preview) echo " w2"; ?>" id="post-<?php the_ID(); ?>">
    <?php if ( $has_post_thumbnail ) : ?>
    <div class="imagefill">
        <?php
            $thumb_id = get_post_thumbnail_id();

            if($double_width_preview) {
                //the_post_thumbnail('blog-double-thumb');
                $thumb_url = wp_get_attachment_image_src($thumb_id,'blog-double-thumb', true);
            } else {
                //the_post_thumbnail('blog-thumb');
                $thumb_url = wp_get_attachment_image_src($thumb_id,'blog-thumb', true);
            }
        ?>
        <img src="<?php echo $thumb_url[0]; ?>" alt="<?php the_title(); ?>" />
    </div>
    <?php endif; ?>
    <h4 class="font-28 fittext-first"><?php the_title(); ?></h4>
    <div class="font-18 marg-lr-5 marg-bot-30"><?php the_excerpt(); ?></div>
    <div class="read-more"></div>
    <div class="item-bottom font-14">
        <div class="add-date float-l pad-left-25 marg-lr-5"><?php echo get_the_date(); ?></div>
        <div class="comments-sum float-r pad-left-25 marg-lr-10"><?php comments_number('0','1','%'); ?></div>
        <div class="share-sum float-r pad-left-25 marg-lr-10">15</div>
        <div class="view-sum float-r pad-left-35 marg-lr-10"><?php echo(ajax_hits_counter_get_hits(get_the_ID())); ?></div>
    </div>
</a>
