var jugadorPun=0;
var maquinaPun=0;
var manoDerecha;

$(document).ready(function(){
    llaveEscondedor();
    $("img").click(function(){
      llaveBuscador(this);
    });
  });

 

  function llaveEscondedor(){
      var llave = Math.floor(Math.random() * 2);
      if(llave==0){
        $("#derecha").attr("alt", "llave");
      }else{
        $("#izquierda").attr("alt", "llave");
    }
  }

  function llaveBuscador(mano){
    //llaveEscondedor();
    if(mano.alt=="llave"){
        $(mano).attr("src", "../imagenes/mano-con-llave.png");
        jugadorPun++;
        $("#jugador").html("Puntos del jugador: "+jugadorPun);
        mano.alt="";
        setTimeout(resetImg,2000);   
    }else{
        manoDerecha=$("#derecha").attr("alt");
        $(mano).attr("src", "../imagenes/mano-sin-llave.png");
        maquinaPun++;
        $("#maquina").html("Puntos de la maquina: "+maquinaPun);
            if(manoDerecha=="llave"){
                setTimeout(Derechallave,2000)  
            }else{
                setTimeout(Izquierdallave,2000)  
            }
            manoDerecha.alt="";
            $("#izquierda").attr("alt"," ");
            setTimeout(resetImg,4000);  
        }
        mano.alt="";
        $("#izquierda").attr("alt"," ");
        $("#derecha").attr("alt"," ");
        llaveEscondedor();
        limpiaPista();
        
  }
  function Derechallave(){
    $("#derecha").attr("src","../imagenes/mano-con-llave.png");
  }
  function Izquierdallave(){
    $("#izquierda").attr("src","../imagenes/mano-con-llave.png");
  }

  function reinicia(){
    jugadorPun=0;
    maquinaPun=0;
    $("#jugador").html("Puntos del jugador: "+jugadorPun);
    $("#maquina").html("Puntos de la maquina: "+maquinaPun);
       
  }

  function pista(){
    manoDerecha = $("#derecha").attr("alt");
    if(manoDerecha=="llave"){
        $("#pista").html("La llave está en la mano derecha");  
    }else{
        $("#pista").html("La llave está en la mano izquierda");  
    }
  }

  function limpiaPista(){
    $("#pista").html(""); 
  }

  function resetImg(){
    $("#derecha").attr("src","../imagenes/mano-cerrada.png");
    $("#izquierda").attr("src","../imagenes/mano-cerrada.png");
  }

