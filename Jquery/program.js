var jugadorPun=0;
var maquinaPun=0;

$(document).ready(function(){
    llaveEscondedor();
    $("img").click(function(){
      llaveBuscador(this);
    });
  });

  window.onload = llaveEscondedor()

  function llaveEscondedor(){
      var llave = Math.floor(Math.random() * 2);

      if(llave==0){
        $("#derecha").attr("alt", "llave");
      }else{
        $("#izquierda").attr("alt", "llave");
    }
  }

  function llaveBuscador(mano){
    if(mano.alt=="llave"){
        $(mano).attr("src", "../imagenes/mano-con-llave.png");
        jugadorPun++;
        $("#jugador").html("Puntos del jugador: "+jugadorPun);
    }else{
        maquinaPun++;
        $("#maquina").html("Puntos de la maquina: "+maquinaPun);
       
    }
  }

  function reinicia(){
    jugadorPun=0;
    maquinaPun=0;
    $("#jugador").html("Puntos del jugador: "+jugadorPun);
    $("#maquina").html("Puntos de la maquina: "+maquinaPun);
       
  }

  function pista(){
    var manoDerecha = $("#derecha").attr("alt");
    var manoIzquierda = $("#izquierda").attr("alt");

    if(manoDerecha=="llave"){
        $("#pista").html("La llave está en la mano: derecha");  
    }else{
        $("#pista").html("La llave está en la mano: izquierda");  

    }
  }

