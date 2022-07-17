$(function(){
   $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"엉뚱발랄 콩순이" },
        headers:{Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
      })
        .done(function( msg ) {

            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  $(".sp_img_box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".sp_text_box").eq(i).append("<p class='sp_text_title'>"+msg.documents[i].title+"</p>"+"<div class='sp_allPrice'><span class='sp_text_price'>"+"정가"+msg.documents[i].price.toLocaleString()+"원"+"</span>"
        +"<span class='sp_text_salePrice'>"+msg.documents[i].sale_price.toLocaleString()+"원"+"</span></div>");

  
            }

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"GOGO 카카오" },
        headers:{Authorization: "KakaoAK f8702296b2a46d6246688c9e72744fce"}
      })
        .done(function( msg ) {

            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  $(".s_img_box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".s_text_box").eq(i).append("<p class='s_text_title'>"+msg.documents[i].title+"</p>"+"<div class='s_allPrice'><span class='s_text_price'>"+"정가"+msg.documents[i].price.toLocaleString()+"원"+"</span>"
        +"<span class='s_text_salePrice'>"+msg.documents[i].sale_price.toLocaleString()+"원"+"</span></div>");

  
            }

        });

      });

 