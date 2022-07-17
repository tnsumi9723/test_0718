 $(function(){
      $(".today").mouseover(function(){
          $(".today_list").stop().show();
          $(".week_list").stop().hide();
          $(".today").css({
            borderLeft:"none",
            borderRight:"none",
            borderBottom:"none"
          });
          $(".week").css({
            border:"1px solid #b7b7b7",
	borderRight:"none"
          });
        });
        
          $(".week").mouseover(function(){
          $(".week_list").stop().show();
          $(".today_list").stop().hide();
          $(".week").css({
            borderLeft:"none",
            borderRight:"none",
            borderBottom:"none"
          });
          $(".today").css({
            border:"1px solid #b7b7b7",
	borderLeft:"none"
          });
        });
      });