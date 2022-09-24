function mostraValor(){

  let variaNumeroA = document.getElementById('childrenA').value;

  let variaNumeroB = document.getElementById('childrenB').value;

  let convertA = Number(variaNumeroA);
  let convertB = Number(variaNumeroB);

  let resultadoSoma = convertA + convertB
  let resultadoMedia = (convertA + convertB) / 2

  alert(`A soma das idades das crianças: ${resultadoSoma}`)

  alert(`A media das idades das crianças: ${resultadoMedia}`)



}