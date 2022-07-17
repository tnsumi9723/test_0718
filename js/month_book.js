  $(function(){
    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"빅토리 노트" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_1 > a:first > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_1 > a:first > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_1 > a:first > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_1 > a:first > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"나를 살게 하는 것들" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_1 > a:last > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_1 > a:last > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_1 > a:last > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_1 > a:last > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"유럽도시기행 2: 빈, 부다페스트, 프라하, 드레스덴 편" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_2 > a:first > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_2 > a:first > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_2 > a:first > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_2 > a:first > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"엄청나게 커다란 소원" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_2 > a:last > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      var list_title1 = msg.documents[0].title;
      var list_title2 = list_title1.substring(0,11)
      $('.list_2 > a:last > .book_box > .month_text_box > .month_text_title').append(list_title2);
      $('.list_2 > a:last > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_2 > a:last > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"퀀텀 라이프 : 빈민가의 갱스터에서 천체물리학자가 되기까지" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_3 > a:first > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_3 > a:first > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_3 > a:first > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_3 > a:first > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"코로나와 잠수복" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_3 > a:last > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_3 > a:last > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_3 > a:last > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_3 > a:last > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"사야 할 집 팔아야 할 집 : 윤석열 정부 시대의 돈 버는 부동산 투자 전략" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_4 > a:first > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_4 > a:first > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_4 > a:first > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_4 > a:first > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"어쩌면 나도 무례한 사람일까 : 시대에 따라 예의도 변한다" } ,
    headers: {Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
    })
    .done(function(msg){
      $('.list_4 > a:last > .book_box > .month_img_box').append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $('.list_4 > a:last > .book_box > .month_text_box > .month_text_title').append(msg.documents[0].title);
      $('.list_4 > a:last > .book_box > .month_text_box > .month_allprice > .month_price').append(msg.documents[0].price.toLocaleString());
      $('.list_4 > a:last > .book_box > .month_text_box > .month_allprice > .month_sale_price').append(msg.documents[0].sale_price.toLocaleString()+"원");
    });

    
  });