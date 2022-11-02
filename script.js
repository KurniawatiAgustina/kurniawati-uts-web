/*----- javascript -----*/
var items = document.querySelectorAll("nav-items");
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        this.classList.add("active");
    })
}
function hasil() {
    var harga=parseInt(document.getElementById("harga").value);
    var jumlah=parseInt(document.getElementById("jumlah").value);
    var total=harga*jumlah;
    document.getElementById('total').innerHTML= total;
    var diskon=0.10;
    var bayar;
    if (total>70000){
        bayar=total-(total*diskon);
        document.getElementById('bayar').value=bayar;
        document.getElementById('diskon').innerHTML="10%";
    } else{
        document.getElementById('bayar').value=total;
        document.getElementById('diskon').innerHTML="0%";
    }

    }
    /*----- j query -----*/
    $(document).ready(function(){
        $('.next').on('click', function(){
          var currentImg = $('.active');
          var nextImg = currentImg.next();
      
          if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
          }
        });
      
        $('.prev').on('click', function(){
          var currentImg = $('.active');
          var prevImg = currentImg.prev();
      
          if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
          }
        });
      });
      

