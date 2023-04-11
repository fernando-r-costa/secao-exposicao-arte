let slide = document.getElementById("imagem");
let descriptionSlide = document.getElementById("imagem-verso");
let previous = document.getElementById("nav-voltar");
let next = document.getElementById("nav-proxima");

// trocar a foto em destaque
function trocaDestaque(numImagem, numImagemDir, numImagemEsq) {
  let slideEsquerda = document.querySelector(".slide-esquerda")
  let slideCentral = document.querySelector(".slide-central")
  let slideDireita = document.querySelector(".slide-direita")
  let textoModal = document.querySelector(".texto-lightbox")
  slideAtual = dados.obras[`${numImagem}`].image.webp;
  descricaoAtual = dados.obras[`${numImagem}`].descricao;
  slideAnterior = dados.obras[`${numImagemEsq}`].image.webp;
  slidePosterior = dados.obras[`${numImagemDir}`].image.webp;
  slide.setAttribute('src', slideAtual);
  descriptionSlide.innerHTML = descricaoAtual;

  if(slideEsquerda != null) {
    slideEsquerda.innerHTML = `<img src="${slideAnterior}">`;
    slideCentral.innerHTML = `<img src="${slideAtual}">`;
    slideDireita.innerHTML = `<img src="${slidePosterior}">`;
    textoModal.innerHTML = descricaoAtual;
  }
}

// passar foto anterior e próxima
function nextImagem() {
  if (numImagem == 10) {
    numImagem = 0;
    numImagemDir++;
    numImagemEsq++;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  } else if (numImagemDir == 10) {
    numImagem++;
    numImagemDir = 0;
    numImagemEsq++;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  } else if (numImagemEsq == 10) {
    numImagem++;
    numImagemDir++;
    numImagemEsq = 0;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  } else if (numImagem < 10) {
    numImagem++;
    numImagemDir++;
    numImagemEsq++;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  }
}

function previousImagem() {
  if (numImagem == 0) {
    numImagem = 10;
    numImagemDir--;
    numImagemEsq--;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  } else if (numImagemDir == 0) {
    numImagem--;
    numImagemDir = 10;
    numImagemEsq--;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  } else if (numImagemEsq == 0) {
    numImagem--;
    numImagemDir--;
    numImagemEsq = 10;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  } else if (numImagem > 0) {
    numImagem--;
    numImagemDir--;
    numImagemEsq--;
    trocaDestaque(numImagem, numImagemDir, numImagemEsq);
  }
}


previous.addEventListener("click", function () { previousImagem() });
next.addEventListener("click", function () { nextImagem() });
