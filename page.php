<?php get_template_part('header');?>
<div class="row">
        <?php if (have_posts()): ?>
        <?php while (have_posts()): the_post();?>
	      	        <?php get_template_part('content', get_post_format())?>
	        <?php endwhile;?>
        <?php else: ?>
        <p>
            <?php __('No Page Found')?>
        </p>
        <?php endif;?>
        <nav>
            <ul class="pager">
                <li>
                    <a href="#">Previous</a>
                </li>
                <li>
                    <a href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
<?php get_template_part('footer');?>