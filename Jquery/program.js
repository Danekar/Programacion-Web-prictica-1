$(document).ready(function(){
    llaveEscondedor();
    $("img").click(function(){
      $(this).attr("src", "../imagenes/mano-con-llave.png");
      
    });
  });

  window.onload = llaveEscondedor()

  function llaveEscondedor(){
      var llave = Math.floor(Math.random() * 2);

      if(llave==0){
        document.getElementById("imgDerecha").alt="llave";
      }else{
        document.getElementById("imgIzquierda").alt="llave";
    }
  }

