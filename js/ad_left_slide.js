$(document).ready(function(){

      function aprev(){
        $('.ad_top_img > li:last').prependTo('.ad_top_img');
        $('.ad_top_img').css({marginLeft:-90});
        $('.ad_top_img').stop().animate({marginLeft:0});
      }

      function anext(){
        $('.ad_top_img').stop().animate({marginLeft:-90},function(){
          $('.ad_top_img > li:first').appendTo('.ad_top_img');
          $('.ad_top_img').css({marginLeft:0});
        });
      }

      $('.aprev').click(function(){
        aprev();
      });

      $('.anext').click(function(){
        anext();
      });
    });