let dados = "";
let slideAtual = "";
let slideAnterior = "";
let slidePosterior = "";
let descricaoAtual = "";
let numImagem = 0;
let numImagemDir = 1;
let numImagemEsq = 10;

let requestUrl = 'assets/js/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function () {
  dados = request.response;
  // console.log(dados);
  slideAtual = dados.obras[`${numImagem}`].image.webp;
  slideAnterior = dados.obras[`${numImagemEsq}`].image.webp;
  slidePosterior = dados.obras[`${numImagemDir}`].image.webp;
  descricaoAtual = dados.obras[`${numImagem}`].descricao;
  slide.setAttribute('src', slideAtual);
  descriptionSlide.innerHTML = descricaoAtual;
}

