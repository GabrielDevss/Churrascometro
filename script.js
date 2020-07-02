let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calc(){
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qtdTotalCevejas = cervejasPP(duracao) * adultos;
  let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne </p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCevejas / 355)} Lata de Cerveja </p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} pet's de 2L</p>`

}

function carnePP(duracao) {
  if (duracao >= 6){
    return 650;
  }
  else {
    return 400;
  }
}
function cervejasPP(duracao) {
  if(duracao>= 6) {
    return 2000;
  }
  else  {
    return 1200;
  }
}
function bebidasPP(duracao) {
  if(duracao >= 6) {
    return 1500;
  }
  else {
    return 1000;
  }
}