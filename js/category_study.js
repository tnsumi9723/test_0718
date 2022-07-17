//학습 / 어학
$(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"우등생 해법 국사과 세트 5-2(2022)"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.st>li:nth-of-type(1)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num13=msg.documents[0].title;
    var num14=num13.substring(0,26);

    $('.st>li:nth-of-type(1)>a').append("<p class='content_title'>"+num14+"</p>");
    
    var price25=msg.documents[0].price.toLocaleString()
    
    $('.st>li:nth-of-type(1)>a').append("<div class='content_price'><span class='price'>"+price25+"원</span>"+"<span class='point1'>+2,100P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"EBS 만점왕 초등 3-2 세트(2022)"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.st>li:nth-of-type(2)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num15=msg.documents[0].title;
    var num16=num15.substring(0,22);

    $('.st>li:nth-of-type(2)>a').append("<p class='content_title'>"+num16+"</p>");
    
    var price26=msg.documents[0].price.toLocaleString()
    
    $('.st>li:nth-of-type(2)>a').append("<div class='content_price'><span class='price'>"+price26+"원</span>"+"<span class='point1'>+500P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"올리드 중등과학 1-2(2022)"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.st>li:nth-of-type(3)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.st>li:nth-of-type(3)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price27=msg.documents[0].price.toLocaleString()
    
    $('.st>li:nth-of-type(3)>a').append("<div class='content_price'><span class='price'>"+price27+"원</span>"+"<span class='point1'>+850P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"혼자 해도 프로 작가처럼 잘그리는 아이패드 드로잉"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.st>li:nth-of-type(4)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num17=msg.documents[0].title;
    var num18=num17.substring(0,24);

    $('.st>li:nth-of-type(4)>a').append("<p class='content_title'>"+num18+"</p>");
    
    var price28=msg.documents[0].price.toLocaleString()
    
    $('.st>li:nth-of-type(4)>a').append("<div class='content_price'><span class='price'>"+price28+"원</span>"+"<span class='point1'>+890P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"ETS 토익 단기공략 850+(LC+RC)"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.st>li:nth-of-type(5)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.st>li:nth-of-type(5)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price29=msg.documents[0].price.toLocaleString()
    
    $('.st>li:nth-of-type(5)>a').append("<div class='content_price'><span class='price'>"+price29+"원</span>"+"<span class='point1'>+750P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"인문 고사성어"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.st>li:nth-of-type(6)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.st>li:nth-of-type(6)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price30=msg.documents[0].price.toLocaleString()
    
    $('.st>li:nth-of-type(6)>a').append("<div class='content_price'><span class='price'>"+price30+"원</span>"+"<span class='point1'>+840P</span></div>");
  });
});