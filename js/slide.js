$(function(){
          var i=0;
          $('#booklist li').eq(i).css({borderTop:"3px solid #ef544d", margin:"-1px 0 0 0"});

          $("#booklist li").mouseenter(function(){
            i = $(this).index()
          })

          function slide() {

            i++;

            if(i > $(".banner_list:last").index()){
              i = 0;
            }
            $(".banner_list").eq(i).stop().fadeIn("slow");
            $(".banner_list").eq(i-1).stop().fadeOut("slow");

            if(i == 1){
              $(".advbox").css({"background":"#fff"})
              $("#booklist li").eq(i-1).css({color:"black",borderTop:"none"});
              $("#booklist li").eq(i).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});

            } else if(i == 2){
              $(".advbox").css({"background":"#fff"})
              $("#booklist li").eq(i-1).css({color:"black",borderTop:"none"});
              $("#booklist li").eq(i).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});

            } else if(i == 3){
              $(".advbox").css({"background":"#ffba00"})
              $("#booklist li").eq(i-1).css({color:"black",borderTop:"none"});
              $("#booklist li").eq(i).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});

            } 
            else if(i == 4){
              $(".advbox").css({"background":"#c3dcf5"})
              $("#booklist li").eq(i-1).css({color:"black",borderTop:"none"});
              $("#booklist li").eq(i).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});

            } 
            else{
              $(".advbox").css({"background":"#c3dcf5"})
              $("#booklist li").eq(i-1).css({color:"black",borderTop:"none"});
              $("#booklist li").eq(i).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});
            }
          }

          $("#booklist li").eq(0).mouseenter(function(){
            var i = 0;
            $(".advbox").css({"background":"#c3dcf5"});
            $("#booklist li").css({borderTop:"none"});
            $(this).css({borderTop:"3px solid #ef544d", margin:"-1px 0 0 0"});
            $(".banner_list").stop().hide();
            $(".banner_list").eq(0).stop().show();
          });

          $("#booklist li").eq(1).mouseenter(function(){
            var i = 0;
            $(".advbox").css({"background":"#fff"});
            $("#booklist li").css({borderTop:"none"});
            $(this).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});
            $(".banner_list").stop().hide();
            $(".banner_list").eq(1).stop().show();
          });

          $("#booklist li").eq(2).mouseenter(function(){
            var i = 0;
            $(".advbox").css({"background":"#fff"});
            $("#booklist li").css({borderTop:"none"});
            $(this).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});
            $(".banner_list").stop().hide();
            $(".banner_list").eq(2).stop().show();
          });

          $("#booklist li").eq(3).mouseenter(function(){
            var i = 0;
            $(".advbox").css({"background":"#ffba00"});
            $("#booklist li").css({borderTop:"none"});
            $(this).css({borderTop:"3px solid #ef544d",margin:"-1px 0 0 0"});
            $(".banner_list").stop().hide();
            $(".banner_list").eq(3).stop().show();
          });

          var ani = setInterval(slide, 5000);

          $("#booklist li").mouseover(function(){
            clearInterval(ani);
          });

          $("#booklist li").mouseout(function(){
            $(this).css({
              borderTop:"3px solid #ef544d",
              margin:"-1px 0 0 0"
            });
            ani = setInterval(slide, 5000);
          });
        });