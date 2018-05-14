<?php get_header();?>
<div class="row">
        <?php the_post();?>
        <?php get_template_part('content', get_post_format())?>
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
<?php get_footer();?>