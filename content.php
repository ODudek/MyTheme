<div class="blog-post">
	            <div class="post-header">
                <div class="post-date">
                    <p class="u-margin-less">
                    <?php the_time('F j')?>
                    </p>
                    <p class="u-margin-less u-center-text">
                    <?php the_time('Y')?>
                    </p>
                    </div>
                    <div class="post-title">
                    <h2 class="u-margin-less">
                        <?php the_title()?>
                    </h2>
                    </div>
                    <div class="post-author">
                        <p class="u-margin-less">Autor: </p>
                    <my-router href="posts?author=<?php echo get_the_author_meta('ID') ?>">
	                    <?php the_author()?>
	                </my-router>
                    </div>
                </div>
                <div class="post-content">
                <?php if (is_single()): ?>
                <?php the_content()?>
        <?php comments_template();?>
                <?php else: ?>
                <?php the_excerpt()?>
                <div class="post-options">
                <a class="line-hover">
                <i class="fa fa-download" aria-hidden="true"></i>
                        Zapisz do czytania w trybie offline
                    </a>
                    <my-router href="posts/<?php the_ID(); ?>" class="line-hover">
                    Zobacz więcej
                    </my-router>

                </div>
                </div>
            <?php endif;?>
</div>
</div>