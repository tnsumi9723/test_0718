$(function(){
 //문학
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"여자들의 왕"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.liter:first>li:nth-of-type(1)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.liter:first>li:nth-of-type(1)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price1=msg.documents[0].price.toLocaleString()

    $('.liter:first>li:nth-of-type(1)>a').append("<div class='content_price'><span class='price'>"+price1+"원</span>"+"<span class='point1'>+840P</span></div>");
  });
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"코로나와 잠수복"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.liter>li:nth-of-type(2)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.liter>li:nth-of-type(2)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price2=msg.documents[0].price.toLocaleString()

    $('.liter>li:nth-of-type(2)>a').append("<div class='content_price'><span class='price'>"+price2+"원</span>"+"<span class='point1'>+740P</span></div>");
  });
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"파묻힌 거인 : 가즈오 이시구로 장편소설[양장]"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.liter>li:nth-of-type(3)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
   
    var num=msg.documents[0].title;
    var num2=num.substring(0,6);
   
    $('.liter>li:nth-of-type(3)>a').append("<p class='content_title'>"+num2+"</p>");
    
    var price3=msg.documents[0].price.toLocaleString()

    $('.liter>li:nth-of-type(3)>a').append("<div class='content_price'><span class='price'>"+price3+"원</span>"+"<span class='point1'>+900P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"빅토리 노트"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.liter>li:nth-of-type(4)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.liter>li:nth-of-type(4)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price4=msg.documents[0].price.toLocaleString()

   $('.liter>li:nth-of-type(4)>a').append("<div class='content_price'><span class='price'>"+price4+"원</span>"+"<span class='point1'>+950P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"이제, 하고 싶은 이야기가 있어요"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.liter>li:nth-of-type(5)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.liter>li:nth-of-type(5)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price5=msg.documents[0].price.toLocaleString()

    $('.liter>li:nth-of-type(5)>a').append("<div class='content_price'><span class='price'>"+price5+"원</span>"+"<span class='point1'>+750P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"어느 날 마음속에 나무를 심었다"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.liter>li:nth-of-type(6)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.liter>li:nth-of-type(6)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price6=msg.documents[0].price.toLocaleString()

    $('.liter>li:nth-of-type(6)>a').append("<div class='content_price'><span class='price'>"+price6+"원</span>"+"<span class='point1'>+750P</span></div>");
  });
});
