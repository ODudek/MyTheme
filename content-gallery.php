<div class="post-gallery-container">
    <h2 class="u-center-text">
        <?php the_title()?>
    </h2>
    <div class="gallery">
        <?php the_content()?>
    <div class="arrows">
    <i class="fa fa-arrow-circle-o-left arrow" aria-hidden="true"></i>
    <i class="fa fa-arrow-circle-o-right arrow" aria-hidden="true"></i>
    </div>
    </div>
    <script src="<?php echo get_bloginfo('template_url'); ?>/scripts/gallery.js" defer> </script>
</div>