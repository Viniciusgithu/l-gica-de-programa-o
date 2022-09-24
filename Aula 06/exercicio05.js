function mostraValor(){

  let variaNumeroA = document.getElementById('numeroA').value;

  let variaNumeroB = document.getElementById('numeroB').value;

  let numeroA = Number(variaNumeroA)
  let numeroB = Number(variaNumeroB)

  let selectOperation = document.querySelector('input[name="operation"]:checked').value;

  let nomeOperation, calculo;

  if (selectOperation == 'adicao') {
    nomeOperation = 'Adição';
    calculo = numeroA + numeroB;
  } else if (selectOperation == 'subtracao') {
    nomeOperation = 'Subtração';
    calculo = (numeroA - numeroB);
  } else if (selectOperation == 'divisao'){
    nomeOperation = 'Divisão';
    calculo = (numeroA / numeroB);
  } else if (selectOperation == 'multiplicacao'){
    nomeOperation = 'Multiplicação';
    calculo = numeroA *  numeroB;
  };
  alert(nomeOperation+': '+calculo);
};