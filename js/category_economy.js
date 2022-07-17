//경제 / 실용
$(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"한 권으로 끝내는 NFT투자 수업"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.eco>li:nth-of-type(1)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.eco>li:nth-of-type(1)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price13=msg.documents[0].price.toLocaleString()
    
    $('.eco>li:nth-of-type(1)>a').append("<div class='content_price'><span class='price'>"+price13+"원</span>"+"<span class='point1'>+900P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"박제영의 종목선정 절대원칙 37"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.eco>li:nth-of-type(2)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.eco>li:nth-of-type(2)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price14=msg.documents[0].price.toLocaleString()
    
    $('.eco>li:nth-of-type(2)>a').append("<div class='content_price'><span class='price'>"+price14+"원</span>"+"<span class='point1'>+940P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"머니 코드"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.eco>li:nth-of-type(3)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.eco>li:nth-of-type(3)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price15=msg.documents[0].price.toLocaleString()
    
    $('.eco>li:nth-of-type(3)>a').append("<div class='content_price'><span class='price'>"+price15+"원</span>"+"<span class='point1'>+840P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"올바르게 승리하라"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.eco>li:nth-of-type(4)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.eco>li:nth-of-type(4)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price16=msg.documents[0].price.toLocaleString()
    
    $('.eco>li:nth-of-type(4)>a').append("<div class='content_price'><span class='price'>"+price16+"원</span>"+"<span class='point1'>+940P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"엘리어트 파동이론 마스터"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.eco>li:nth-of-type(5)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.eco>li:nth-of-type(5)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price17=msg.documents[0].price.toLocaleString()
    
    $('.eco>li:nth-of-type(5)>a').append("<div class='content_price'><span class='price'>"+price17+"원</span>"+"<span class='point1'>+1,500P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"자본의 미스터리"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.eco>li:nth-of-type(6)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.eco>li:nth-of-type(6)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price18=msg.documents[0].price.toLocaleString()
    
    $('.eco>li:nth-of-type(6)>a').append("<div class='content_price'><span class='price'>"+price18+"원</span>"+"<span class='point1'>+900P</span></div>");
  });
});