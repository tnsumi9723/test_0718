//유아 / 아동
$(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"흔한남매 이상한 나라의 고전 읽기 1: 춘향전 토끼전 옹고집전"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.ch>li:nth-of-type(1)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num5=msg.documents[0].title;
    var num6=num5.substring(0,25);

    $('.ch>li:nth-of-type(1)>a').append("<p class='content_title'>"+num6+"</p>");
    
    var price19=msg.documents[0].price.toLocaleString()
    
    $('.ch>li:nth-of-type(1)>a').append("<div class='content_price'><span class='price'>"+price19+"원</span>"+"<span class='point1'>+700P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"세금 내는 아이들의 생생 경제 교실 1"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.ch>li:nth-of-type(2)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.ch>li:nth-of-type(2)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price20=msg.documents[0].price.toLocaleString()
    
    $('.ch>li:nth-of-type(2)>a').append("<div class='content_price'><span class='price'>"+price20+"원</span>"+"<span class='point1'>+750P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"에그박사7"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.ch>li:nth-of-type(3)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.ch>li:nth-of-type(3)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price21=msg.documents[0].price.toLocaleString()
    
    $('.ch>li:nth-of-type(3)>a').append("<div class='content_price'><span class='price'>"+price21+"원</span>"+"<span class='point1'>+720P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"윙페더 사가 1"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.ch>li:nth-of-type(4)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num7=msg.documents[0].title;
    var num8=num7.substring(0,8);

    $('.ch>li:nth-of-type(4)>a').append("<p class='content_title'>"+num8+"</p>");
    
    var price22=msg.documents[0].price.toLocaleString()
    
    $('.ch>li:nth-of-type(4)>a').append("<div class='content_price'><span class='price'>"+price22+"원</span>"+"<span class='point1'>+990P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"무지개 물고기와 이야기꾼"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.ch>li:nth-of-type(5)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num9=msg.documents[0].title;
    var num10=num9.substring(0,13);

    $('.ch>li:nth-of-type(5)>a').append("<p class='content_title'>"+num10+"</p>");
    
    var price23=msg.documents[0].price.toLocaleString()
    
    $('.ch>li:nth-of-type(5)>a').append("<div class='content_price'><span class='price'>"+price23+"원</span>"+"<span class='point1'>+650P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"엄청나게 커다란 소원"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.ch>li:nth-of-type(6)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num11=msg.documents[0].title;
    var num12=num11.substring(0,11);

    $('.ch>li:nth-of-type(6)>a').append("<p class='content_title'>"+num12+"</p>");
    
    var price24=msg.documents[0].price.toLocaleString()
    
    $('.ch>li:nth-of-type(6)>a').append("<div class='content_price'><span class='price'>"+price24+"원</span>"+"<span class='point1'>+650P</span></div>");
  });
});