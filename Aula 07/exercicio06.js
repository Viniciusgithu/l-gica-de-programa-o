function mostraValor(){

  let variaNumeroA = document.getElementById('numeroA').value;

  let mostraResultado = document.getElementById('paragraph');

  let numeroA = Number(variaNumeroA)
 
  calculoResultado = (numeroA * 1.8) + 32
  
  mostraResultado.innerText = ` O valor ${numeroA}ºC corresponde a ${calculoResultado}ºF`


};