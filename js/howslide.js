$(document).ready(function(){
      var wid = $(".how_choice").width();
      var i = $(".dot2 li.on").index();
      var len = $(".how_choice>ul>li").length;
      $(".hprev").click(function(){
        if (i == 0){
          i = len - 1;
        }else {
          i = i - 1;
        }
        showSlide();
      });

      $(".hnext").click(function(){
        if (i == 1){
          i = 0;
        }else {
          i = i + 1;
        }
        showSlide();
      });

      $(".dot2 li").click(function(){
        i = $(this).index();
        showSlide();
      });

      function showSlide(){
        $(".dot2 li").removeClass("on");
        $(".dot2 li").eq(i).addClass("on");
        $(".how_choice>ul>li").stop(true, true).hide();
        $(".how_choice>ul>li").eq(i).stop(true, true).show();
      }
    });