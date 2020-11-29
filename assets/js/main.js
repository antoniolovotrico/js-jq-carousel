//Handler Metod,tutto il codice JS racchiuso all'interno di questa funzione anonima verra caricato solo dopo il caricamento della DOM.
$(function(){

  //Dichiarazione ed inizializzazione delle variabili pulsanti. 
  var forward = $(".fa-angle-right");
  var backward = $(".fa-angle-left"); 
  
  //Funzione forward per scorrere le slide da sinistra a destra
  forward.click(function(){
    
    //Dichiarazione ed inizializzazione delle variabili Img e Circle delle slide. Dichiarare queste Var all'interno della funzione per un corretto funzionamento.
    var firstImg = $("img.first"); 
    var firstCircle = $("i.first");
    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active");
    
    //Condizione valida nel caso in cui ci troviamo sull'ultima Img di uno Slider affinche ad un ulteriore click ricomincia a scorrere dalla prima Img.
    if (imgAttiva.hasClass("last")) {
      
      imgAttiva.removeClass("active");
      circleAttivo.removeClass("active");
      firstImg.addClass("active");
      firstCircle.addClass("active");

    //Condizione generale per scorrere le immagini di uno slider da sinistra verso destra.      
    } else {
      
      imgAttiva.removeClass("active");
      imgAttiva.next().addClass("active");
      circleAttivo.removeClass("active");
      circleAttivo.next().addClass("active");
    }    
  })

  //Funzione di scorrimento delle Img da sinistra a destra delle Img di uno slider alla pressione di un particolare tasto. Il resto delle condizioni è equivalente al click sul pulsante della funzione precedente.
  $(document).keydown(function(e){

      var firstImg = $("img.first"); 
      var firstCircle = $("i.first");
      var imgAttiva = $("img.active");
      var circleAttivo = $("i.active");
      
      //il KeyCode 39 corrisponde alla arrow di destra della tastiera.
      if (e.keyCode == 39) { 
      
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
      }    
    })

  //Funzione Backward per scorrere le slide da destra a sinistra.  
  backward.click(function(){

    //Dichiarazione ed inizializzazione delle variabili Img e Circle delle slide. Dichiarare queste Var all'interno della funzione per un corretto funzionamento.
    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active");
    var lastImg = $("img.last");
    var lastCircle = $("i.last");

    //Condizione valida nel caso in cui ci troviamo sulla prima Img di uno Slider affinche ad un ulteriore click ricomincia a scorrere dall'ultima Img.
    if (imgAttiva.hasClass("first")) {

      imgAttiva.removeClass("active");
      circleAttivo.removeClass("active");
      lastImg.addClass("active");
      lastCircle.addClass("active");
    
      //Condizione generale per scorrere le immagini di uno slider da destra verso sinistra.
    } else {
      imgAttiva.removeClass("active");
      imgAttiva.prev().addClass("active");
      circleAttivo.removeClass("active");
      circleAttivo.prev().addClass("active");
    }    
  })

  //Funzione di scorrimento delle Img da destra a sinistra delle Img di uno slider alla pressione di un particolare tasto. Il resto delle condizioni è equivalente al click sul pulsante della funzione precedente.
  $(document).keydown(function(e){
    
    var imgAttiva = $("img.active");
    var circleAttivo = $("i.active");
    var lastImg = $("img.last");
    var lastCircle = $("i.last");
    
    //il KeyCode 37 corrisponde alla arrow di sinistra della tastiera.
    if (e.keyCode == 37) { 
    
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
    }
  })

})

