$(document).ready(function(){
      function prev(){
        $('.interlist:last').prependTo('.book_slide');
        $('.book_slide').css({marginLeft:-457});
        $('.book_slide').stop().animate({marginLeft:0},800);
      }

      function next(){
        $('.book_slide').stop().animate({marginLeft:-457},function(){
          $('.interlist:first').appendTo('.book_slide');
          $('.book_slide').css({marginLeft:0});
        });

      }

      function slide(){
        $('.book_slide').stop().animate({marginLeft:-457},function(){
          $('.interlist:first').appendTo('.book_slide');
          $('.book_slide').css({marginLeft:0});
        });

      }

      setInterval(slide, 5000);

      $('.prev').click(function(){
          prev();
        });

        $('.next').click(function(){
          next();
        });
    });