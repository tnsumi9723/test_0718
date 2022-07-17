//외국도서
$(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"Crying in H Mart"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.gl>li:nth-of-type(1)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.gl>li:nth-of-type(1)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price31=msg.documents[0].price.toLocaleString()
    
    $('.gl>li:nth-of-type(1)>a').append("<div class='content_price'><span class='price'>"+price31+"원</span>"+"<span class='point1'>+400P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"Brown Bear, Brown Bear, What Do You See?"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.gl>li:nth-of-type(2)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num19=msg.documents[0].title;
    var num20=num19.substring(0,35);

    $('.gl>li:nth-of-type(2)>a').append("<p class='content_title'>"+num20+"</p>");
    
    var price32=msg.documents[0].price.toLocaleString()
    
    $('.gl>li:nth-of-type(2)>a').append("<div class='content_price'><span class='price'>"+price32+"원</span>"+"<span class='point1'>+140P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"Reading Advantage 1.(SB)"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.gl>li:nth-of-type(3)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.gl>li:nth-of-type(3)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price33=msg.documents[0].price.toLocaleString()
    
    $('.gl>li:nth-of-type(3)>a').append("<div class='content_price'><span class='price'>"+price33+"원</span>"+"<span class='point1'></span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"The Art of Encanto"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.gl>li:nth-of-type(4)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.gl>li:nth-of-type(4)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price34=msg.documents[0].price.toLocaleString()
    
    $('.gl>li:nth-of-type(4)>a').append("<div class='content_price'><span class='price'>"+price34+"원</span>"+"<span class='point1'>+1,430P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"Pachinko (National Book Award Finalist) 애플TV+ 파친코 원작"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.gl>li:nth-of-type(5)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    
    var num21=msg.documents[0].title;
    var num22=num21.substring(0,38);

    $('.gl>li:nth-of-type(5)>a').append("<p class='content_title'>"+num22+"</p>");
    
    var price35=msg.documents[0].price.toLocaleString()
    
    $('.gl>li:nth-of-type(5)>a').append("<div class='content_price'><span class='price'>"+price35+"원</span>"+"<span class='point1'>+370P</span></div>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"Who Moved My Cheese?"},
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.gl>li:nth-of-type(6)>a').append("<div class='content_img'>"+"<img src='"+msg.documents[0].thumbnail+"'/>"+"</div>");
    $('.gl>li:nth-of-type(6)>a').append("<p class='content_title'>"+msg.documents[0].title+"</p>");
    
    var price36=msg.documents[0].price.toLocaleString()
    
    $('.gl>li:nth-of-type(6)>a').append("<div class='content_price'><span class='price'>"+price36+"원</span>"+"<span class='point1'>+60P</span></div>");
  });
});