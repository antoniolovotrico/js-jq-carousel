$(function(){
  var forward = $(".fa-angle-right");
  var backward = $(".fa-angle-left"); 
  
  forward.click(function(){
     
    var firstImg = $("img.first"); 
    var firstCircle = $("i.first");
    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active");
    
    
    if (imgAttiva.hasClass("last")) {
      
      imgAttiva.removeClass("active");
      circleAttivo.removeClass("active");
      firstImg.addClass("active");
      firstCircle.addClass("active");

    } else {
      
      imgAttiva.removeClass("active");
      imgAttiva.next().addClass("active");
      circleAttivo.removeClass("active");
      circleAttivo.next().addClass("active");
    }    
  })

  backward.click(function(){

    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active");
    var lastImg = $("img.last");
    var lastCircle = $("i.last");

    if (imgAttiva.hasClass("first")) {

      imgAttiva.removeClass("active");
      circleAttivo.removeClass("active");
      lastImg.addClass("active");
      lastCircle.addClass("active");
    
    } else {
      imgAttiva.removeClass("active");
      imgAttiva.prev().addClass("active");
      circleAttivo.removeClass("active");
      circleAttivo.prev().addClass("active");
    }    
  })

})