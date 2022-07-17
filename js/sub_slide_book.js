 $(function(){
   $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"소설" },
        headers:{Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
      })
        .done(function( msg ) {

            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){

                  var s_str=msg.documents[i].title;
                  var s_str2=s_str.substring(0,17);
 
                  $(".sub_rl_img").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".sub_rl_title").eq(i).append("<p>"+s_str2+"</p>");
            }

        });

        $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data: { query:"지구 끝의 온실" } ,
       headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
       })
      .done (function(msg){
      $('.sub_recommend_list > li:nth-of-type(2) > .sub_rl:nth-of-type(5)> a > .sub_rl_img').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    
       var s_str3=msg.documents[0].title;
       var s_str4=s_str3.substring(0,17);
    
      $('.sub_recommend_list > li:nth-of-type(2) > .sub_rl:nth-of-type(5)> a > .sub_rl_title').append("<p>"+s_str4+"</p>");
      });

      $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data: { query:"불편한 편의점" } ,
       headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
       })
      .done (function(msg){
      $('.sub_recommend_list > li:nth-of-type(2) > .sub_rl:nth-of-type(6)> a > .sub_rl_img').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    
       var s_str4=msg.documents[0].title;
       var s_str5=s_str4.substring(0,7);
    
      $('.sub_recommend_list > li:nth-of-type(2) > .sub_rl:nth-of-type(6)> a > .sub_rl_title').append("<p>"+s_str5+"</p>");
      });

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"프레드릭 배크만" },
        headers:{Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
      })
        .done(function( msg ) {

            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){

                  var s_str=msg.documents[i].title;
                  var s_str2=s_str.substring(0,17);
 
                  $(".sub_rl_img1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".sub_rl_title1").eq(i).append("<p>"+s_str2+"</p>");
            }

        });

        $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data: { query:"일생일대의 거래" } ,
       headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
       })
      .done (function(msg){
      $('.sub_recommend_list1 > li:nth-of-type(2) > .sub_rl:nth-of-type(5)> a > .sub_rl_img1').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    
       var s_str3=msg.documents[0].title;
       var s_str4=s_str3.substring(0,17);
    
      $('.sub_recommend_list1 > li:nth-of-type(2) > .sub_rl:nth-of-type(5)> a > .sub_rl_title1').append("<p>"+s_str4+"</p>");
      });

      $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data: { query:"불안한 사람들(큰글자도서)" } ,
       headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
       })
      .done (function(msg){
      $('.sub_recommend_list1 > li:nth-of-type(2) > .sub_rl:nth-of-type(6)> a > .sub_rl_img1').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    
       var s_str4=msg.documents[0].title;
       var s_str5=s_str4.substring(0,7);
    
      $('.sub_recommend_list1 > li:nth-of-type(2) > .sub_rl:nth-of-type(6)> a > .sub_rl_title1').append("<p>"+s_str5+"</p>");
      });

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"너" },
        headers:{Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
      })
        .done(function( msg ) {

            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){

                  var s_str=msg.documents[i].title;
                  var s_str2=s_str.substring(0,17);
 
                  $(".sub_rl_img2").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".sub_rl_title2").eq(i).append("<p>"+s_str2+"</p>");
            }

        });

        $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data: { query:"인플레이션에서 살아남기" } ,
       headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
       })
      .done (function(msg){
      $('.sub_recommend_list2 > li:nth-of-type(2) > .sub_rl:nth-of-type(5)> a > .sub_rl_img2').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    
       var s_str3=msg.documents[0].title;
       var s_str4=s_str3.substring(0,17);
    
      $('.sub_recommend_list2 > li:nth-of-type(2) > .sub_rl:nth-of-type(5)> a > .sub_rl_title2').append("<p>"+s_str4+"</p>");
      });

      $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data: { query:"아몬드" } ,
       headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
       })
      .done (function(msg){
      $('.sub_recommend_list2 > li:nth-of-type(2) > .sub_rl:nth-of-type(6)> a > .sub_rl_img2').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    
       var s_str4=msg.documents[0].title;
       var s_str5=s_str4.substring(0,7);
    
      $('.sub_recommend_list2 > li:nth-of-type(2) > .sub_rl:nth-of-type(6)> a > .sub_rl_title2').append("<p>"+s_str5+"</p>");
      });
      });