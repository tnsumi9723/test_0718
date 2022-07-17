$(document).ready(function () {
    // 펼쳐보기, 접어보기

    $(".text_spread").eq(0).click(function () { //책소개 펼쳐보기
        $(".intro_text").height("auto");
        $(".text_spread").eq(0).hide();
        $("#hidden1").show();
        $(".text_spread").eq(1).show();
    });

    $(".text_spread").eq(1).click(function () { //책소개 접어보기
        $(".intro_text").height("auto");
        $(".text_spread").eq(1).hide();
        $("#hidden1").hide();
        $(".text_spread").eq(0).show();
    });


    $(".pub_spread").eq(0).click(function () { //출판사 서평 펼쳐보기
        $(".pub_text").height("auto");
        $(".pub_spread").eq(0).hide();
        $("#hidden2").show();
        $(".pub_spread").eq(1).show();
    });

    $(".pub_spread").eq(1).click(function () { //출판사 서평 접어보기
        $(".pub_text").height("auto");
        $(".pub_spread").eq(1).hide();
        $("#hidden2").hide();
        $(".pub_spread").eq(0).show();
    });


    $(".recommendation_spread").eq(0).click(function () { //추천사 펼쳐보기
        $(".recommendation_text").height("auto");
        $(".recommendation_spread").eq(0).hide();
        $("#hidden3").show();
        $(".recommendation_spread").eq(1).show();
    });

    $(".recommendation_spread").eq(1).click(function () { //추천사 접어보기
        $(".recommendation_text").height("auto");
        $(".recommendation_spread").eq(1).hide();
        $("#hidden3").hide();
        $(".recommendation_spread").eq(0).show();
    });


     $(".index_spread").eq(0).click(function () { //목차 펼쳐보기
        $(".index_text").height("auto");
        $(".index_spread").eq(0).hide();
        $("#hidden4").show();
        $(".index_spread").eq(1).show();
    });

    $(".index_spread").eq(1).click(function () { //목차 접어보기
        $(".index_text").height("auto");
        $(".index_spread").eq(1).hide();
        $("#hidden4").hide();
        $(".index_spread").eq(0).show();
    });



     $(".maintext_spread").eq(0).click(function () { //본문중에서 펼쳐보기
        $(".maintext_text").height("auto");
        $(".maintext_spread").eq(0).hide();
        $("#hidden5").show();
        $(".maintext_spread").eq(1).show();
    });

    $(".maintext_spread").eq(1).click(function () { //본문중에서 접어보기
        $(".maintext_text").height("auto");
        $(".maintext_spread").eq(1).hide();
        $("#hidden5").hide();
        $(".maintext_spread").eq(0).show();
    });

    $(".author_spread").eq(0).click(function () { //저자의 다른책에서 펼쳐보기
        $(".author_book1").height("auto");
        $(".author_spread").eq(0).hide();
        $(".author_book_hidden").show();
        $(".author_spread").eq(1).show();
    });

    $(".author_spread").eq(1).click(function () { //저자의 다른책에서 접어보기
        $(".author_book1").height("auto");
        $(".author_spread").eq(1).hide();
        $(".author_book_hidden").hide();
        $(".author_spread").eq(0).show();
    });
    
    $(".review_spread").eq(0).click(function () { //리뷰에서 다른책에서 펼쳐보기
        $(".re_best3").height("auto");
        $(".review_spread").eq(0).hide();
        $(".p_hidden1").show();
        $(".review_spread").eq(1).show();
    });

    $(".review_spread").eq(1).click(function () { //리뷰에서 다른책에서 접어보기
        $(".re_best3").height("auto");
        $(".review_spread").eq(1).hide();
        $(".p_hidden1").hide();
        $(".review_spread").eq(0).show();
    });
    
    $(".review_spread1").eq(0).click(function () { //리뷰에서 다른책에서 펼쳐보기
        $(".re_best3_1").height("auto");
        $(".review_spread1").eq(0).hide();
        $(".p_hidden").show();
        $(".review_spread1").eq(1).show();
    });

    $(".review_spread1").eq(1).click(function () { //리뷰에서 다른책에서 접어보기
        $(".re_best3_1").height("auto");
        $(".review_spread1").eq(1).hide();
        $(".p_hidden").hide();
        $(".review_spread1").eq(0).show();
    });

});