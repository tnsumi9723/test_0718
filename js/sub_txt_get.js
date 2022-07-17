//책소개 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt1.txt", function(data){
          $('.intro_text').html(data);
        })
      });
      //출판사 서평 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt2.txt", function(data){
          $('.pub_text').html(data);
        })
      });
      //추천사 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt3.txt", function(data){
          $('.recommendation_text').html(data);
        })
      });
      //목차 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt4.txt", function(data){
          $('.index_text').html(data);
        })
      });
      //본문중에서 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt5.txt", function(data){
          $('.maintext_text').html(data);
        })
      });
      // 저자소개 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt6.txt", function(data){
          $('.author_info_text').html(data);
        })
      });  
       // 역자소개 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt7.txt", function(data){
          $('.translator_info_text').html(data);
        })
        
      });
       // 리뷰 메모장으로 텍스트 가져오기
       $(function(){
        $.get("./sub_txt/txt8.txt", function(data){
          $('.re_best3').html(data);
        })
        
      });
      // 리뷰 메모장으로 텍스트 가져오기
      $(function(){
        $.get("./sub_txt/txt9.txt", function(data){
          $('.re_best3_1').html(data);
        })
        
      });