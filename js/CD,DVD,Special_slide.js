$(function(){
    //CD 박스에 화살표에 마우스를 올렸을 때 색상변화
    $('.pro_prev').hover(function(){
      $('.pro_prev > img').attr('src','img/arrowlefthover.png');
    },function(){
      $('.pro_prev > img').attr('src','img/arrowleft.png');
    });
    
    $('.pro_next').hover(function(){
      $('.pro_next > img').attr('src','img/arrowrighthover.png');
    },function(){
      $('.pro_next > img').attr('src','img/arrowright.png');
    });

    //DVD 박스에 화살표에 마우스를 올렸을 때 색상변화
    $('.pro_prev1').hover(function(){
      $('.pro_prev1 > img').attr('src','img/arrowlefthover.png');
    },function(){
      $('.pro_prev1 > img').attr('src','img/arrowleft.png');
    });
    
    $('.pro_next1').hover(function(){
      $('.pro_next1 > img').attr('src','img/arrowrighthover.png');
    },function(){
      $('.pro_next1 > img').attr('src','img/arrowright.png');
    });

    //특별판 박스에 화살표에 마우스를 올렸을 때 색상변화
    $('.product_prev').hover(function(){
      $('.product_prev > img').attr('src','img/arrowlefthover.png');
    },function(){
      $('.product_prev > img').attr('src','img/arrowleft.png');
    });
    
    $('.product_next').hover(function(){
      $('.product_next > img').attr('src','img/arrowrighthover.png');
    },function(){
      $('.product_next > img').attr('src','img/arrowright.png');
    });

    //CD 박스 슬라이드
    function pro_prev(){
      $('.product_slide > li:last').prependTo('.product_slide');
    }

    function pro_next(){
      $('.product_slide > li:first').appendTo('.product_slide');
    }

    $('.pro_prev').click(function(){
      pro_prev();
    });

    $('.pro_next').click(function(){
      pro_next();
    });
    
    //DVD 박스 슬라이드
    function pro_prev1(){
      $('.product_dvd_slide > li:last').prependTo('.product_dvd_slide');
    }

    function pro_next1(){
      $('.product_dvd_slide > li:first').appendTo('.product_dvd_slide');
    }

    $('.pro_prev1').click(function(){
      pro_prev1();
    });

    $('.pro_next1').click(function(){
      pro_next1();
    });

    //특별판 박스 슬라이드
    function product_prev(){
      $('.product_content > li:last').prependTo('.product_content');
    }

    function product_next(){
      $('.product_content > li:first').appendTo('.product_content');
    }

    $('.product_prev').click(function(){
      product_prev();
    });

    $('.product_next').click(function(){
      product_next();
    });

  });