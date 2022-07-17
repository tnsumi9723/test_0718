//인문 / 교양
$(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"뛰는 사람"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.hu>li:nth-of-type(1)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.hu>li:nth-of-type(1)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price7=msg.documents[0].price.toLocaleString()
    
    $('.hu>li:nth-of-type(1)>a').append("<div class='content_price'><span class='price'>"+price7+"원</span>"+"<span class='point1'>+840P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"우편함 속 세계사 : 129통의 매혹적인 편지로 엿보는 역사의 이면"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.hu>li:nth-of-type(2)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.hu>li:nth-of-type(2)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price8=msg.documents[0].price.toLocaleString()
    
    $('.hu>li:nth-of-type(2)>a').append("<div class='content_price'><span class='price'>"+price8+"원</span>"+"<span class='point1'>+1,150P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"비터스위트"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.hu>li:nth-of-type(3)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.hu>li:nth-of-type(3)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price9=msg.documents[0].price.toLocaleString()
    
    $('.hu>li:nth-of-type(3)>a').append("<div class='content_price'><span class='price'>"+price9+"원</span>"+"<span class='point1'>+900P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"숨은 붙어 있으니 살아야겠고"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.hu>li:nth-of-type(4)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.hu>li:nth-of-type(4)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price10=msg.documents[0].price.toLocaleString()
    
    $('.hu>li:nth-of-type(4)>a').append("<div class='content_price'><span class='price'>"+price10+"원</span>"+"<span class='point1'>+750P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"악령이 출몰하는 세상 : 과학, 어둠 속의 촛불[양장]"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.hu>li:nth-of-type(5)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num3=msg.documents[0].title;
    var num4=num3.substring(0,11);

    $('.hu>li:nth-of-type(5)>a').append("<p class='content_title'>"+num4+"</p>");
    
    var price11=msg.documents[0].price.toLocaleString()
    
    $('.hu>li:nth-of-type(5)>a').append("<div class='content_price'><span class='price'>"+price11+"원</span>"+"<span class='point1'>+1,500P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"당신에게 필요한 색다른 하루"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.hu>li:nth-of-type(6)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.hu>li:nth-of-type(6)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price12=msg.documents[0].price.toLocaleString()
    
    $('.hu>li:nth-of-type(6)>a').append("<div class='content_price'><span class='price'>"+price12+"원</span>"+"<span class='point1'>+870P</span></div>");
  });
});