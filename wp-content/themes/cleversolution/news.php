<section class="newsBlog">
    <div class="container">
        <div class="row">

            <?php
            $tags = get_field('tags');
            if ($tags and count($tags) > 0) {
                $query = new WP_Query(array('tag__in' => $tags)); ?>
                <?php if ($query->have_posts()) :
                    $count = 1;
                    while ($query->have_posts())  : $query->the_post(); ?>
                        <?php if ($query->post_count == 1) { ?>
                            <div class="col-md-12">
                                <div class="itemOne">
                                    <a href="<?php echo get_permalink(); ?>">
                                        <div class="img"><?php the_post_thumbnail() ?></div>
                                        <h2 class="name"><?php the_title() ?></h2>
                                        <?php the_excerpt(); ?>
                                    </a>
                                </div>
                            </div>
                        <?php } else { ?>
                            <?php if ($count % 3 == 0) { ?>
                                <div class="col-md-12">
                                    <div class="itemOne clearfix">
                                        <a href="<?php echo get_permalink(); ?>">
                                            <div class="col-md-6 nopadding">
                                                <div class="img"><?php the_post_thumbnail() ?></div>
                                            </div>
                                            <div class="col-md-6">
                                                <h2 class="name"><?php the_title() ?></h2>
                                                <?php the_excerpt(); ?>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            <?php } else { ?>
                                <div class="col-md-6">
                                    <div class="item">
                                        <a href="<?php echo get_permalink(); ?>">
                                            <div class="img"><?php the_post_thumbnail() ?></div>
                                            <h2 class="name"><?php the_title() ?></h2>
                                            <?php the_excerpt(); ?>
                                        </a>
                                    </div>
                                </div>
                            <?php } ?>
                            <?php $count++;
                        } ?>
                    <?php endwhile; ?>
                <?php endif; ?>

                <?php
            }
            wp_reset_postdata();
            ?>

        </div>
    </div>
</section>