<?php get_template_part('header');?>
        <?php if (have_posts()): ?>
        <?php while (have_posts( )): the_post();?>
        <?php get_template_part('content', get_post_format())?>
        <?php endwhile;?>
        <?php else: ?>
        <p>
            <?php __('No Posts Found')?>
        </p>
        <?php endif;?>
<?php get_template_part('footer');?>