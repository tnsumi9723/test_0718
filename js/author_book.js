 $(function(){
    //저자의 다른책 1
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"나보다 소중한 사람이 생겨버렸다(큰글자도서) : 프레드릭 배크만 에세이" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list>li:nth-of-type(1) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num=msg.documents[0].title;
    var s_num2=s_num.substring(0,24);
    $('.author_book_list>li:nth-of-type(1) > .author_book_title').append("<p><a href='#'>"+s_num2+"</a></p>");
    $('.author_book_list>li:nth-of-type(1) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });
  //저자의 다른책 2
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"나보다 소중한 사람이 생겨버렸다" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list>li:nth-of-type(2) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
    $('.author_book_list>li:nth-of-type(2) > .author_book_title').append("<p><a href='#'>"+msg.documents[0].title+"</a></p>");
    $('.author_book_list>li:nth-of-type(2) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });
  //저자의 다른책 3
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"불안한 사람들(큰글자도서)" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list>li:nth-of-type(3) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num3=msg.documents[0].title;
    var s_num4=s_num3.substring(0,14);
    $('.author_book_list>li:nth-of-type(3) > .author_book_title').append("<p><a href='#'>"+s_num4+"</a></p>");
    $('.author_book_list>li:nth-of-type(3) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 4
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"불안한 사람들" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list>li:nth-of-type(4) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num5=msg.documents[0].title;
    var s_num6=s_num5.substring(0,7);
    $('.author_book_list>li:nth-of-type(4) > .author_book_title').append("<p><a href='#'>"+s_num6+"</a></p>");
    $('.author_book_list>li:nth-of-type(4) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 5
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"일생일대의 거래(큰글자도서)" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list>li:nth-of-type(5) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num7=msg.documents[0].title;
    var s_num8=s_num7.substring(0,15);
    $('.author_book_list>li:nth-of-type(5) > .author_book_title').append("<p><a href='#'>"+s_num8+"</a></p>");
    $('.author_book_list>li:nth-of-type(5) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 6
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"일생일대의 거래" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list>li:nth-of-type(6) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num9=msg.documents[0].title;
    var s_num10=s_num9.substring(0,8);
    $('.author_book_list>li:nth-of-type(6) > .author_book_title').append("<p><a href='#'>"+s_num10+"</a></p>");
    $('.author_book_list>li:nth-of-type(6) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 7
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"할머니가 미안하다고 전해달랬어요(큰글자) : 프레드릭 배크만 장편소설" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list1>li:nth-of-type(1) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num11=msg.documents[0].title;
    var s_num12=s_num11.substring(0,22);
    $('.author_book_list1>li:nth-of-type(1) > .author_book_title').append("<p><a href='#'>"+s_num12+"</a></p>");
    $('.author_book_list1>li:nth-of-type(1) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 8
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"할머니가 미안하다고 전해달랬어요" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list1>li:nth-of-type(2) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num13=msg.documents[0].title;
    var s_num14=s_num13.substring(0,15);
    $('.author_book_list1>li:nth-of-type(2) > .author_book_title').append("<p><a href='#'>"+msg.documents[0].title+"</a></p>");
    $('.author_book_list1>li:nth-of-type(2) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 9
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"하루하루가 이별의 날(큰글자)" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list1>li:nth-of-type(3) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num13=msg.documents[0].title;
    var s_num14=s_num13.substring(0,15);
    $('.author_book_list1>li:nth-of-type(3) > .author_book_title').append("<p><a href='#'>"+s_num14+"</a></p>");
    $('.author_book_list1>li:nth-of-type(3) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 10
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"하루하루가 이별의 날" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list1>li:nth-of-type(4) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num15=msg.documents[0].title;
    var s_num16=s_num15.substring(0,11);
    $('.author_book_list1>li:nth-of-type(4) > .author_book_title').append("<p><a href='#'>"+s_num16+"</a></p>");
    $('.author_book_list1>li:nth-of-type(4) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });
  
  //저자의 다른책 11
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"브릿마리 여기 있다(큰글자) : 프레드릭 배크만 장편소설" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list1>li:nth-of-type(5) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
    $('.author_book_list1>li:nth-of-type(5) > .author_book_title').append("<p><a href='#'>"+msg.documents[0].title+"</a></p>");
    $('.author_book_list1>li:nth-of-type(5) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 12
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"브릿마리 여기 있다" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list1>li:nth-of-type(6) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
    $('.author_book_list1>li:nth-of-type(6) > .author_book_title').append("<p><a href='#'>"+msg.documents[0].title+"</a></p>");
    $('.author_book_list1>li:nth-of-type(6) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 13
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"베어타운(큰글자)" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list2>li:nth-of-type(1) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num17=msg.documents[0].title;
    var s_num18=s_num17.substring(0,11);
    $('.author_book_list2>li:nth-of-type(1) > .author_book_title').append("<p><a href='#'>"+s_num18+"</a></p>");
    $('.author_book_list2>li:nth-of-type(1) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

   //저자의 다른책 14
   $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"베어타운" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list2>li:nth-of-type(2) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");
    $('.author_book_list2>li:nth-of-type(2) > .author_book_title').append("<p><a href='#'>"+msg.documents[0].title+"</a></p>");
    $('.author_book_list2>li:nth-of-type(2) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 15
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"우리와 당신들(큰글자도서)" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list2>li:nth-of-type(3) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num19=msg.documents[0].title;
    var s_num20=s_num19.substring(0,14);
    $('.author_book_list2>li:nth-of-type(3) > .author_book_title').append("<p><a href='#'>"+s_num20+"</a></p>");
    $('.author_book_list2>li:nth-of-type(3) > .author_book_price').append("<span class='sale_red'>"+msg.documents[0].price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  //저자의 다른책 16
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"우리와 당신들" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.author_book_list2>li:nth-of-type(4) > .author_book_img').append("<a href='#'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</a>");

    var s_num21=msg.documents[0].title;
    var s_num22=s_num21.substring(0,7);
    $('.author_book_list2>li:nth-of-type(4) > .author_book_title').append("<p><a href='#'>"+s_num22+"</a></p>");
    $('.author_book_list2>li:nth-of-type(4) > .author_book_price').append("<span class='line'>"+msg.documents[0].price.toLocaleString()+"원</span>"+"<span class='sale_red'>"+msg.documents[0].sale_price.toLocaleString()+"<span class='normal'>원</span></span>");

  });

  
  });