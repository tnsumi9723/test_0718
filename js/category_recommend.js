$(function(){
    //초기 설정을 위한 코드
    $('.tab_content > ul').hide();
    $('.tab_content > ul').eq(0).show();
    $('.category_tab>li>i').eq(0).show();


    //literature에 마우스가 올라갔을때의 변화코드
    $('.category_tab > li').eq(0).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.literature').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(0).addClass('on');
      $('.category_tab>li>i').eq(0).show();
    });

    //economy에 마우스가 올라갔을 때의 변화코드
    $('.category_tab > li').eq(1).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.human').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(1).addClass('on');
      $('.category_tab>li>i').eq(1).show();
    });

    //human에 마우스가 올라갔을 때의 변화코드
    $('.category_tab > li').eq(2).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.economy').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(2).addClass('on');
      $('.category_tab>li>i').eq(2).show();
    });

    //child에 마우스가 올라갔을 때의 변화코드
    $('.category_tab > li').eq(3).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.child').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(3).addClass('on');
      $('.category_tab>li>i').eq(3).show();
    });

    //study에 마우스가 올라갔을 때의 변화코드
    $('.category_tab > li').eq(4).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.study').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(4).addClass('on');
      $('.category_tab>li>i').eq(4).show();
    });

    //global에 마우스가 올라갔을 때의 변화코드
    $('.category_tab > li').eq(5).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.global').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(5).addClass('on');
      $('.category_tab>li>i').eq(5).show();
    });

    //cd에 마우스가 올라갔을 때의 변화코드
    $('.category_tab > li').eq(6).mouseover(function(){
      $('.tab_content > ul').hide();
      $('.cd').show();
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').removeClass('on');
      $('.category_tab>li').eq(6).addClass('on');
      $('.category_tab>li>i').eq(6).show();
    });
  });