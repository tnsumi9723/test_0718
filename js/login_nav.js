$(function(){
      $('.mypage a').mouseover(function(){
        $('.my_list').stop().slideDown();
        $('.arrow_up').stop().show();
        $('.arrow_down').stop().hide();
      }).mouseleave(function(){
        $('.my_list').stop().slideUp();
        $('.arrow_up').stop().hide();
        $('.arrow_down').stop().show();
      });

      $('.language').mouseover(function(){
        $('.language_list').stop().slideDown();
        $('.arrow_up').stop().show();
        $('.arrow_down').stop().hide();
      }).mouseleave(function(){
        $('.language_list').stop().slideUp();
        $('.arrow_up').stop().hide();
        $('.arrow_down').stop().show();
      });
    });