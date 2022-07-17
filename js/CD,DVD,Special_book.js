$(function(){
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"타이탄의 도구들(블랙 에디션)" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.product_content > li:nth-of-type(1) > a > .product_content_title ').append(msg.documents[0].title);
    $('.product_content > li:nth-of-type(1) > a > .product_content_price > .product_content_origin').append(msg.documents[0].price.toLocaleString());
    $('.product_content > li:nth-of-type(1) > a > .product_content_price > .product_content_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"넛지(파이널 에디션) : 복잡한 세상에서 똑똑한 선택을 이끄는 힘[양장]" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    var text1 = msg.documents[0].title;
    var text2 = text1.substring(0,11);
    $('.product_content > li:nth-of-type(2) > a > .product_content_title ').append(text2);
    $('.product_content > li:nth-of-type(2) > a > .product_content_price > .product_content_origin').append(msg.documents[0].price.toLocaleString());
    $('.product_content > li:nth-of-type(2) > a > .product_content_price > .product_content_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"어서 오세요, 휴남동 서점입니다 (여름 숲 에디션) : 황보름 장편소설" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.product_content > li:nth-of-type(3) > a > .product_content_title ').append(msg.documents[0].title);
    $('.product_content > li:nth-of-type(3) > a > .product_content_price > .product_content_origin').append(msg.documents[0].price.toLocaleString());
    $('.product_content > li:nth-of-type(3) > a > .product_content_price > .product_content_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"디에센셜 한강" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    var text3 = msg.documents[0].title;
    var text4 = text3.substring(0,8);
    $('.product_content > li:nth-of-type(4) > a > .product_content_title ').append(text4);
    $('.product_content > li:nth-of-type(4) > a > .product_content_price > .product_content_origin').append(msg.documents[0].price.toLocaleString());
    $('.product_content > li:nth-of-type(4) > a > .product_content_price > .product_content_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"어린이라는 세계" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.product_content > li:nth-of-type(5) > a > .product_content_title ').append(msg.documents[0].title);
    $('.product_content > li:nth-of-type(5) > a > .product_content_price > .product_content_origin').append(msg.documents[0].price.toLocaleString());
    $('.product_content > li:nth-of-type(5) > a > .product_content_price > .product_content_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
  });
  });