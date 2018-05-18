<?php get_template_part('header');?>
<section class="u-showcase u-margin-bottom-medium u-center-text">
    <div class="u-container">
        <div class="u-loader">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        </div>
    </div>
    <my-router href="" class="btn"> Przejdz do bloga </my-router>
</section>
<section class="boxes u-center-text u-margin-bottom-medium">
        <div class="row">
        <div class="col-1-of-3 box">
        <?php if (is_active_sidebar('box1')): ?>
                <?php dynamic_sidebar('box1')?>
                <?php endif;?>
                
               
            </div>
            <div class="col-1-of-3 box">
            <?php if (is_active_sidebar('box2')): ?>
                <?php dynamic_sidebar('box2')?>
                <?php endif;?>
            </div>
            <div class="col-1-of-3 box">
            <?php if (is_active_sidebar('box3')): ?>
                <?php dynamic_sidebar('box3')?>
                <?php endif;?>
            </div>
                
        </div>

</section>
<script src="<?php echo get_bloginfo('template_url'); ?>/scripts/front-page.js" defer> </script>
<?php get_template_part('footer')?>