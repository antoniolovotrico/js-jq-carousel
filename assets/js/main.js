// $(function() {
//     var forward = $(".fa-angle-right");
//     var backward = $(".fa-angle-left");
//     var sliderElement = $(".images").find("img");
//     var i = 0;
//     var clickable = true;

//     forward.click(function(){
//       if (clickable) {
//         clickable = false;
//         i++;    
//       }
        
//     });
    
//   });

$(function(){
  var forward = $(".fa-angle-right");
  var backward = $(".fa-angle-left");

  forward.click(function(){

    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active")
    imgAttiva.removeClass("active");
    imgAttiva.next().addClass("active");
    circleAttivo.removeClass("active");
    circleAttivo.next().addClass("active");

    
  })

  backward.click(function(){
    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active")
    imgAttiva.removeClass("active");
    imgAttiva.prev().addClass("active");
    circleAttivo.removeClass("active");
    circleAttivo.prev().addClass("active");
  })

})