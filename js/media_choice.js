$(function(){
      // 몇번 미디어이미지 인지 확인하기 위한 변수
      let media_count = 0;

      //미디어 이미지가 자동으로 동작하기 위한 Interval을 위한 함수
      function media_slide(){
        media_count++;
        if(media_count > $('.media_slides > li:last').index()){
          media_count = 0;
        }

        $('.media_slides>li').hide();
        $('.media_slides>li').eq(media_count).show();
        slide_dot();
      }
      //이전 버튼을 클릭했을 때 호출되는 함수
      function mprev(){
        clearInterval(slide);
        media_count--;
        if(media_count < 0){
          media_count = $('.media_slides>li:last').index();
        }
        $('.media_slides>li').hide();
        $('.media_slides>li').eq(media_count).show();
        slide_dot();
        slide = setInterval(media_slide,3000);
      }
      //다음 버튼을 클릭했을 때 호출되는 함수
      function mnext(){
        clearInterval(slide);
        media_count++;
        if(media_count > $('.media_slides>li:last').index()){
          media_count = 0;
        }
        $('.media_slides>li').hide();
        $('.media_slides>li').eq(media_count).show();
        slide_dot();
        slide = setInterval(media_slide,3000);
      }
      let slide = setInterval(media_slide,3000);

      //클릭 함수를 호출해주는 구문
      $('.mprev').click(function(){
        mprev();
        dot_color();
      });
      $('.mnext').click(function(){
        mnext();
        dot_color();
      });
      function slide_dot(){
        dot_color();
      }
      //dot1의 색이 강조되게 하는 함수
       
      function dot_color(){

        if(media_count == 0 || media_count == 2){
          $('.media_slides').show();
        } else if(media_count>2){
          $('.media_slides').hide();
        }
         $('.dot1 > li').css('color', 'hidden');
        $('.dot1 > li').css('color', '#ccc');
        $('.dot1 > li').eq(media_count).css('color','#4cc1ec');


      }
      //dot가 자동으로 동작하기 위한 Interval을 위한 함수
      function dot_event(){
        $('.dot1>li').eq(0).mouseover(function(){
          media_count = 0;
          clearInterval(slide);
          dot_color();
          slide = setInterval(media_slide,3000);
          $('.media_slides>li').hide();
          $('.media_slides>li').eq(media_count).show();
        });

        $('.dot1>li').eq(1).mouseover(function(){
          media_count = 1;
          clearInterval(slide);
          dot_color();
          slide = setInterval(media_slide,3000);
          $('.media_slides>li').hide();
          $('.media_slides>li').eq(media_count).show();
        });

        $('.dot1>li').eq(2).mouseover(function(){
          media_count = 2;
          clearInterval(slide);
          dot_color();
          slide = setInterval(media_slide,3000);
          $('.media_slides>li').hide();
          $('.media_slides>li').eq(media_count).show();
        });
      }
      //기본 실행이 필요한 함수들 호출
      dot_event();
      slide_dot()
    });