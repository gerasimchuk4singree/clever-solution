<?php
    $has_post_thumbnail = ( has_post_thumbnail() )? true : false;
?>

<div itemscope itemtype="http://schema.org/Blog" class="item post-content <?php the_field('post_background_color'); if(!$has_post_thumbnail) echo " no-image"; ?>" id="post-<?php the_ID(); ?>">
    <div class="relative pad-bot-30">
        <?php if ( $has_post_thumbnail ) : ?>
        <div class="imagefill">
            <?php
                $thumb_id = get_post_thumbnail_id();
                $thumb_url = wp_get_attachment_image_src($thumb_id,'blog-post-thumb', true);
            ?>
            <img src="<?php echo $thumb_url[0]; ?>" alt="<?php the_title(); ?>" />
        </div>
        <?php endif; ?>
        <h1 itemprop="headline" class="font-28 fittext-first"><?php the_title(); ?></h1>
        <div class="item-bottom font-14">
            <div itemprop="datePublished dateModified" class="add-date float-l pad-left-25 marg-lr-5"><?php echo get_the_date(); ?></div>
            <div class="comments-sum float-r pad-left-25 marg-lr-10"><?php comments_number('0','1','%'); ?></div>
            <div class="share-sum float-r pad-left-25 marg-lr-10">15</div>
            <div class="view-sum float-r pad-left-35 marg-lr-10"><?php echo(ajax_hits_counter_get_hits(get_the_ID())); ?></div>
        </div>
    </div>
    <div itemprop="description" class="post-text cl-black font-18 custom-post-text">
        <?php the_content(); ?>
    </div>
    <div class="share cl-white marg-lr-5">
        <div itemprop="mainEntityOfPage" class="share42init" data-url="<?php the_permalink() ?>" data-title="<?php the_title() ?>" <?php if ( $has_post_thumbnail ) : ?>data-image="<?php echo $thumb_url[0];?>"<?php endif; ?>></div>
        <div class="share-text pad-right-30 marg-right-15">Share</div>
        <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/share42/share42.js"></script>
    </div>
</div>
<div class="clear"></div>