$(function(){
        $('.inside_left li').mouseover(function(){
          var i = $(this).index();
          $('.inside_left li').removeClass("on2");
          $('.inside_left li').eq(i).addClass("on2");
          $('.inside_imgbox').stop().hide();
          $('.inside_imgbox').eq(i).stop().show();
        });
      });