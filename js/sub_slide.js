$(function(){
      function sub_prev(){
      $('.sub_recommend_list > li:last').prependTo('.sub_recommend_list');
      $('.sub_recommend_list').css({marginLeft:-880});
      $('.sub_recommend_list').stop().animate({marginLeft:0},800);
    }    
    $('.sub_prev').click(function(){
      sub_prev();
    });
    function sub_next(){
      $('.sub_recommend_list').stop().animate({marginLeft:-880},function(){
        $('.sub_recommend_list > li:first').appendTo('.sub_recommend_list');
        $('.sub_recommend_list').css({marginLeft:0});
      });
    }
    $('.sub_next').click(function(){
      sub_next();
    });

    function sub_prev1(){
      $('.sub_recommend_list1 > li:last').prependTo('.sub_recommend_list1');
      $('.sub_recommend_list1').css({marginLeft:-880});
      $('.sub_recommend_list1').stop().animate({marginLeft:0},800);
    }    
    $('.sub_prev1').click(function(){
      sub_prev1();
    });
    function sub_next1(){
      $('.sub_recommend_list1').stop().animate({marginLeft:-880},function(){
        $('.sub_recommend_list1 > li:first').appendTo('.sub_recommend_list1');
        $('.sub_recommend_list1').css({marginLeft:0});
      });
    }
    $('.sub_next1').click(function(){
      sub_next1();
    });

    function sub_prev2(){
      $('.sub_recommend_list2 > li:last').prependTo('.sub_recommend_list2');
      $('.sub_recommend_list2').css({marginLeft:-880});
      $('.sub_recommend_list2').stop().animate({marginLeft:0},800);
    }    
    $('.sub_prev2').click(function(){
      sub_prev2();
    });
    function sub_next2(){
      $('.sub_recommend_list2').stop().animate({marginLeft:-880},function(){
        $('.sub_recommend_list2 > li:first').appendTo('.sub_recommend_list2');
        $('.sub_recommend_list2').css({marginLeft:0});
      });
    }
    $('.sub_next2').click(function(){
      sub_next2();
    });

     });