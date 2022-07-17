$(function(){
        //화살표에 마우스를 올렸을 때 색상변화
        $('.sub_prev').hover(function(){
          $('.sub_prev > img').attr('src','img/sub_arrowlefthover.png');
        },function(){
          $('.sub_prev > img').attr('src','img/sub_arrowleft.png');
        });
        $('.sub_next').hover(function(){
          $('.sub_next > img').attr('src','img/sub_arrowrighthover.png');
        },function(){
          $('.sub_next > img').attr('src','img/sub_arrowright.png');
        });

        $('.sub_prev1').hover(function(){
          $('.sub_prev1 > img').attr('src','img/sub_arrowlefthover.png');
        },function(){
          $('.sub_prev1 > img').attr('src','img/sub_arrowleft.png');
        });
        $('.sub_next1').hover(function(){
          $('.sub_next1 > img').attr('src','img/sub_arrowrighthover.png');
        },function(){
          $('.sub_next > img').attr('src','img/sub_arrowright.png');
        });

        $('.sub_prev2').hover(function(){
          $('.sub_prev2 > img').attr('src','img/sub_arrowlefthover.png');
        },function(){
          $('.sub_prev2 > img').attr('src','img/sub_arrowleft.png');
        });
        $('.sub_next2').hover(function(){
          $('.sub_next2 > img').attr('src','img/sub_arrowrighthover.png');
        },function(){
          $('.sub_next2 > img').attr('src','img/sub_arrowright.png');
        });
      });