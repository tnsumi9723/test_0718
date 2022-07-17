 $(function(){
    //위쪽의 카운트의 숫자의 초기값을 설정하는 구문
    let slide_count = 1;
    $('.menu_count').text(slide_count);

    function auto_slide(){
      slide_count++;
      if(slide_count > $('.list > li:last').index()+1){
        slide_count = 1;
      }
      $('.menu_count').text(slide_count);
      $('.list').stop().animate({marginLeft:-345},500,function(){
      $('.list > li:first').appendTo('.list');
      $('.list').css({marginLeft:0});
      });
    }
    function month_prev(){
      //클릭 될 때마다 interval을 초기화 해주어 오류 사전방지
      clearInterval(auto);
      auto = setInterval(auto_slide,5000);
      //위쪽의 슬라이드 카운터가 바뀌게 하는 구문
      slide_count--;
      if(slide_count == 0){
        slide_count = 4;
      }
      $('.menu_count').text(slide_count);

      //이전으로 돌아가는 슬라이드를 위한 구문
      $('.list > li:last').prependTo('.list');
      $('.list').css({marginLeft:-345});
      $('.list').stop().animate({marginLeft:0},500);
    }
    function month_next(){
      //클릭 될 때마다 interval을 초기화 해주어 오류 사전방지
      clearInterval(auto);
      auto = setInterval(auto_slide,5000);
      //다음으로 넘어가는 슬라이드를 위한 구문
      $('.list').stop().animate({marginLeft:-345},500,function(){
        //위쪽의 슬라이드 카운터가 바뀌게 하는 구문
        slide_count++;
        if(slide_count > $('.list > li:last').index()+1){
          slide_count = 1;
        }
        $('.menu_count').text(slide_count);
        $('.list > li:first').appendTo('.list');
        $('.list').css({marginLeft:0});
      });
    }
    //자동으로 슬라이드를 해주기 위한 Interval
    let auto = setInterval(auto_slide,5000);

    //위쪽에서 만든 함수를 각각이 클릭되었을 때 호출하는 구문
    $('.mon_prev').click(function(){
      month_prev();
    });
    $('.mon_next').click(function(){
      month_next();
    });
  });