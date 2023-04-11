let slide = document.getElementById("imagem");
let descriptionSlide = document.getElementById("imagem-verso");
let numImagem = "0";
let previous = document.getElementById("nav-voltar");
let next = document.getElementById("nav-proxima");

// trocar a foto em destaque
function trocaDestaque (numImagem) {
    slide.setAttribute('src', dados.obras[`${numImagem}`].image.webp);
    descriptionSlide.innerHTML = dados.obras[`${numImagem}`].descricao;
}

// passar foto anterior e próxima
function nextImagem() {
    if(numImagem < 10) {
        numImagem++;
        trocaDestaque(numImagem);
    } else if(numImagem == 10) {
        numImagem = 0;
        trocaDestaque(numImagem);
    }
}

function previousImagem() {
    if(numImagem > 0) {
        numImagem--;
        trocaDestaque(numImagem);
    } else if(numImagem == 0) {
        numImagem = 10;
        trocaDestaque(numImagem);
    }
}

previous.addEventListener ("click", function() {previousImagem()});
next.addEventListener ("click", function() {nextImagem()});
