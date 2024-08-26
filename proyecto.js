const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
  if(validarEntrada(textArea.value)){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  document.getElementById("btnCopy").style.visibility = "visible"; 
  }else{
    alert("Por Favor, ingrese solo letras minúsculas y letras.")
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase()
  
  for( let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada
}

function btnDesencriptar(){
  if(validarEntrada(textArea.value)){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  }else{
     alert("Por favor, ingresar solo letras minúsculas y espacios.")
  }
}


function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase()
  
  for( let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada;
}


function myFunction() {
  
  // Get the text field
  let copyText = document.getElementById("myTextarea");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  copyText.value = "";
  mensaje.style.backgroundImage = "url()";
  document.getElementById("btnCopy").style.visibility = "hidden";
  
}

function validarEntrada(texto) {
  const regex = /^[a-z\s]+$/;  // Solo letras minúsculas y espacios
  return regex.test(texto);
}


