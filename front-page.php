<?php get_template_part('header');?>
<section class="showcase">
    <div class="container">
        <div class="loader">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        </div>
    </div>
    <button class="button"> Przejdz do bloga </button>
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