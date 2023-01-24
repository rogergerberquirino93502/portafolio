function limpiarCaracteres(textoentrada){
  var listacaracteres = "+!@#$^&%*()+=-[]\/{}|:<>?,.";
  for (var i = 0; i < listacaracteres.length; i++) {
    textoentrada= textoentrada.replace(new RegExp("\\" + listacaracteres[i], 'gi'), '');
  }
  textoentrada = textoentrada.toLowerCase();
  textoentrada = textoentrada.replace(/ /g,".");
  textoentrada = textoentrada.replace(/á/gi,"a");
  textoentrada = textoentrada.replace(/é/gi,"e");
  textoentrada = textoentrada.replace(/í/gi,"i");
  textoentrada = textoentrada.replace(/ó/gi,"o");
  textoentrada = textoentrada.replace(/ú/gi,"u");
  textoentrada = textoentrada.replace(/ñ/gi,"n");
  return textoentrada;
}
function encriptar() {
  var texto = document.getElementById("entrada").value.toLowerCase();
  texto = limpiarCaracteres(texto);
  var textoaencriptar = texto.replace(/e/igm,"enter");
  var textoaencriptar = textoaencriptar.replace(/o/igm,"ober");
  var textoaencriptar = textoaencriptar.replace(/i/igm,"imes");
  var textoaencriptar = textoaencriptar.replace(/a/igm,"ai");
  var textoaencriptar = textoaencriptar.replace(/u/igm,"ufat");
  if (texto === "" || texto === null){
    document.getElementById("fondo").style.display = "block";
    document.getElementById("frame5").style.display = "block";
    document.getElementById("mostrar").innerHTML = "";
  }else{
  document.getElementById("fondo").style.display = "none";
  document.getElementById("frame5").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiartexto").style.display = "show";
  document.getElementById("mostrar").innerHTML = textoaencriptar;
  document.getElementById("entrada").innerHTML = " ";
  document.getElementById("copiartexto").style.display = "inherit";
  }
}

function desencriptar() {
  var texto = document.getElementById("entrada").value.toLowerCase();
  var textoaencriptar = texto.replace(/enter/igm,"e");
  var textoaencriptar = textoaencriptar.replace(/ober/igm,"o");
  var textoaencriptar = textoaencriptar.replace(/imes/igm,"i");
  var textoaencriptar = textoaencriptar.replace(/ai/igm,"a");
  var textoaencriptar = textoaencriptar.replace(/ufat/igm,"u");
  if (texto === "" || texto === null){
    document.getElementById("fondo").style.display = "block";
    document.getElementById("frame5").style.display = "block";
    document.getElementById("mostrar").innerHTML = "";
  }else {
    document.getElementById("fondo").style.display = "none";
    document.getElementById("frame5").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiartexto").style.display = "show";
    document.getElementById("mostrar").innerHTML = textoaencriptar;
    document.getElementById("entrada").innerHTML = " ";
    document.getElementById("copiartexto").style.display = "inherit";
  }
}
function copiado() {
  var contenido = document.querySelector("#mostrar");
  contenido.select();
  document.execCommand('copy');
}
