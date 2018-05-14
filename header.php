<!DOCTYPE html>
<html <?php language_attributes();?>>
  <head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php bloginfo('description');?>">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title><?php bloginfo('name');?> |
    <?php is_front_page() ? bloginfo('description') : wp_title();?></title>
    <link href="<?php bloginfo('template_url');?>/styles/layout.css" rel="stylesheet">
    <link href="<?php bloginfo('stylesheet_url');?>" rel="stylesheet">
    <link href="<?php bloginfo('template_url');?>/styles/footer.css" rel="stylesheet">    
    <link href="<?php bloginfo('template_url');?>/styles/front-page.css" rel="stylesheet">        
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
    <?php wp_head();?>
  </head>
  <body>
    <div class="blog-masthead">
    </div>
    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title"><?php bloginfo('name')?></h1>
        <p class="lead blog-description"><?php bloginfo('description')?></p>
      </div>