$(function(){
    //추천 도서 1
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"눈물 한 방울" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.book_slide > li:nth-of-type(1) > .book_img').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    $('.book_slide > li:nth-of-type(1) > .book_title > .title').append("<h3>"+msg.documents[0].title+"</h3>");

    var str=msg.documents[0].contents;
    var str2=str.substring(0,60);

    $('.book_slide > li:nth-of-type(1) > .book_content').append("<p>"+str2+"</p>");
  });
  //추천 도서2
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"퀀텀 라이프 : 빈민가의 갱스터에서 천체물리학자가 되기까지" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.book_slide > li:nth-of-type(2) > .book_img').append("<img src='"+msg.documents[0].thumbnail+"'/>");
    $('.book_slide > li:nth-of-type(2) > .book_title > .title').append("<h3>"+msg.documents[0].title+"</h3>");

    var str=msg.documents[0].contents;
    var str2=str.substring(0,60);

    $('.book_slide > li:nth-of-type(2) > .book_content').append("<p>"+str2+"</p>");
  });
  //추천 도서3
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"난처한 경제 이야기 1: 기본 편 : 경제와 친해지는 준비 운동" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.book_slide > li:nth-of-type(3) > .book_img').append("<img src='"+msg.documents[0].thumbnail+"'/>");

    var str3=msg.documents[0].title;
    var str4=str3.substring(0,18);

    $('.book_slide > li:nth-of-type(3) > .book_title > .title').append("<h3>"+str4+"</h3>");

    var str=msg.documents[0].contents;
    var str2=str.substring(0,60);

    $('.book_slide > li:nth-of-type(3) > .book_content').append("<p>"+str2+"</p>");
  });

  //추천 도서4
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"으라차차 라면가게" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
  })
  .done (function(msg){
    $('.book_slide > li:nth-of-type(4) > .book_img1').append("<img src='"+msg.documents[0].thumbnail+"'/>");

    var str5=msg.documents[0].title;
    var str6=str5.substring(0,10);
    $('.book_slide > li:nth-of-type(4) > .book_title1 > .title').append("<h3>"+str6+"</h3>");

    var str=msg.documents[0].contents;
    var str2=str.substring(0,60);

    $('.book_slide > li:nth-of-type(4) > .book_content1').append("<p>"+str2+"</p>");
  });

  });
  