<?php

function my_theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('post-formats', array('aside', 'gallery'));
}

add_action('after_setup_theme', 'my_theme_setup');

function set_excerpt_length()
{
    return 45;
}

add_filter('excerpt_length', 'set_excerpt_length');

function my_init_widgets($id)
{
    register_sidebar(array(
        'name' => 'Box1',
        'id' => 'box1',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));
    register_sidebar(array(
        'name' => 'Box2',
        'id' => 'box2',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));
    register_sidebar(array(
        'name' => 'Box3',
        'id' => 'box3',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));
}

add_action('widgets_init', 'my_init_widgets');

remove_filter('the_content', 'wpautop');

function learningWordPress_resources()
{
    wp_localize_script('main_js', 'Data', array(
        'noonce' => wp_create_nonce('wp_rest'),
        'url' => get_site_url(),
    ));
}

add_action('wp_enqueue_scripts', 'learningWordPress_resources');
