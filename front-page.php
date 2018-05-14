<?php get_template_part('header');?>
<section class="showcase">
    <div class="container">
        <h1>
            <?php the_title()?> </h1>
        <p>
            <?php if (have_posts()):?>
            <?php while (have_posts()): the_post();?>
            <?php the_content();?>
            <?php endwhile;?>
            <?php else: ?>
            <p>Brak treści</p>
            <?php endif;?> 
        </p>
        <button class="button"> Przejdz do bloga </button>
    </div>
</section>
<section class="boxes">
    <div class="container">
        <div class="front-row">
                <?php if (is_active_sidebar('box1')): ?>
                <?php dynamic_sidebar('box1')?>
                <?php endif;?> 
                <?php if (is_active_sidebar('box2')): ?>
                <?php dynamic_sidebar('box2')?>
                <?php endif;?> 
                <?php if (is_active_sidebar('box3')): ?>
                <?php dynamic_sidebar('box3')?>
                <?php endif;?> 
        </div>
    </div>
</section>
<script src="<?php echo get_bloginfo('template_url'); ?>/scripts/front-page.js" defer> </script>
<?php get_template_part('footer')?>