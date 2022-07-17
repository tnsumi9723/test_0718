$(function(){
    //초기 설정을 위한 코드
    $('.sp_wrap > ul').hide();
    $('.sp_book_list').show();
    $('.sale_title').css({
      borderBottom : "1px solid #000"
    });
    $('.only_discount').css({
      border : "1px solid #000",
      borderBottom : "none",
      color: "#f7695b",
      background : "#fff"
    });
     $('.price_more').hide();
    $('.sp_prev').hide();
    $('.sp_next').hide();
    $('.s_prev').hide();
    $('.s_next').hide();
    //특가 할인에 마우스가 올라갔을 때의 변화코드
    $('.only_discount').mouseover(function(){
      $('.sp_wrap > ul').hide();
    $('.sp_book_list').show();
    $('.sale_title').css({
      borderBottom : "1px solid #000"
    });
    $('.only_discount').css({
      border : "1px solid #000",
      borderBottom : "none",
      color: "#f7695b"
    });
    $('.price_discount').css({
      border : "none",
      color : "#000"
    });
    $('.price_more').hide();
    });
    //정가 할인에 마우스가 올라갔을 때의 변화코드
    $('.price_discount').mouseover(function(){
      $('.sp_wrap > ul').hide();
    $('.s_book_list').show();
    $('.sale_title').css({
      borderBottom : "1px solid #000"
    });
    $('.price_discount').css({
      border : "1px solid #000",
      borderBottom : "none",
      color: "#f7695b",
      background : "#fff"
    });
    $('.only_discount').css({
      border : "none",
      color : "#000",
      borderBottom : "1px solid #000"
    });
    $('.price_more').show();
    });
    //버튼이 보여지는 변화코드
    $('.special_book').hover(function(){
      $('.sp_prev').show();
      $('.sp_next').show();
    },function(){
      $('.sp_prev').hide();
      $('.sp_next').hide();
    });


    //버튼을 눌렀을 때 슬라이드
    function sprev(){
      $('.sp_book_list > li:last').prependTo('.sp_book_list');
      $('.sp_book_list').css({marginLeft:-500});
      $('.sp_book_list').stop().animate({marginLeft:0},800);
    }    
    $('.sp_prev').click(function(){
      sprev();
    });
    function snext(){
      $('.sp_book_list').stop().animate({marginLeft:-500},function(){
        $('.sp_book_list > li:first').appendTo('.sp_book_list');
        $('.sp_book_list').css({marginLeft:0});
      });
    }
    $('.sp_next').click(function(){
      snext();
    });

    function ssprev(){
      $('.s_book_list > li:last').prependTo('.s_book_list');
      $('.s_book_list').css({marginLeft:-500});
      $('.s_book_list').stop().animate({marginLeft:0},800);
    }    
    $('.sp_prev').click(function(){
      ssprev();
    });
    function ssnext(){
      $('.s_book_list').stop().animate({marginLeft:-500},function(){
        $('.s_book_list > li:first').appendTo('.s_book_list');
        $('.s_book_list').css({marginLeft:0});
      });
    }
    $('.sp_next').click(function(){
      ssnext();
    });
  });