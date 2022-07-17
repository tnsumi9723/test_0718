//-,+ 눌렀을때 숫자 변화하는 함수
      $(function(){
        $('.minus').click(function(){
          var stat = $('.count_number').val();
          var num = parseInt(stat, 10);
          num--;
          if (num <= 0) {
            alert('최소 구매량은 1권입니다.');
            num=1;
          }
          $('.count_number').val(num);
        });
        $('.plus').click(function(){
          var stat = $('.count_number').val();
          var num = parseInt(stat, 10);
          num++;
          if (num > 100) {
            alert('최대 구매량은 99권입니다.');
            num=99;
          }
          $('.count_number').val(num);
        });
      });