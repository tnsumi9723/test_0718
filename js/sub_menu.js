$(function(){
        $('.sub_nav_menu > ul > li').click(function(){
             var i = $(this).index();
             $('.sub_nav_menu > ul > li').removeClass("on1");
             $('.sub_nav_menu > ul > li').eq(i).addClass("on1");
        });
      });