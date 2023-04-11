let section = document.querySelector("section");
let textoTitModal = "<h1>Bem vindo a Galeria de Arte</h1><img src='./assets/images/FRC.gif'>";
let textoTextoModal = "Aqui você poderá observar as obras e saber um pouco mais de grandes artistas.";
let textoBotao1 = "Entrar";

let textoTitLightbox = "<h1>Leonardo da Vinci</h1>";
let textoBotaoLightbox = "X";


function montaModal(id) {
  if (id === 1) {
    let modal = document.createElement("div");
    let modalConteudo = document.createElement("div");
    let tituloModal = document.createElement("div");
    let textoModal = document.createElement("div");
    let botao1 = document.createElement("button");

    modal.classList.add("modal");
    modalConteudo.classList.add("modal-conteudo");
    tituloModal.classList.add("titulo-modal");
    textoModal.classList.add("texto-modal");
    botao1.classList.add("botao1");
    botao1.setAttribute("id", "botao1");
    botao1.setAttribute("onclick", "fechaModal(1)");

    tituloModal.innerHTML = textoTitModal;
    textoModal.innerText = textoTextoModal;
    botao1.innerText = textoBotao1;

    section.before(modal);
    modal.appendChild(modalConteudo);
    modalConteudo.appendChild(tituloModal);
    modalConteudo.appendChild(textoModal);
    modalConteudo.appendChild(botao1);

  } else if (id === 2) {

    let modal = document.createElement("div");
    let modalConteudo = document.createElement("div");
    let tituloModal = document.createElement("div");
    let textoModal = document.createElement("div");
    let botao1 = document.createElement("button");
    let slideEsquerda = document.createElement("div");
    let slideCentral = document.createElement("div");
    let slideDireita = document.createElement("div");

    modal.classList.add("lightbox");
    modalConteudo.classList.add("lightbox-conteudo");
    tituloModal.classList.add("titulo-lightbox");
    textoModal.classList.add("texto-lightbox");
    botao1.classList.add("botao-lightbox");
    botao1.setAttribute("id", "botao-lightbox");
    botao1.setAttribute("onclick", "fechaModal(2)");
    slideEsquerda.classList.add("slide-esquerda");
    slideEsquerda.setAttribute("onclick", "previousImagem()");
    slideCentral.classList.add("slide-central");
    slideDireita.classList.add("slide-direita");
    slideDireita.setAttribute("onclick", "nextImagem()")

    tituloModal.innerHTML = textoTitLightbox;
    botao1.innerText = textoBotaoLightbox;
    textoModal.innerHTML = descricaoAtual;
    slideEsquerda.innerHTML = `<img src="${slideAnterior}">`;
    slideCentral.innerHTML = `<img src="${slideAtual}">`;
    slideDireita.innerHTML = `<img src="${slidePosterior}">`;

    section.before(modal);
    modal.appendChild(modalConteudo);
    modalConteudo.appendChild(tituloModal);
    modalConteudo.appendChild(textoModal);
    modalConteudo.appendChild(botao1);
    modalConteudo.appendChild(slideEsquerda);
    modalConteudo.appendChild(slideCentral);
    modalConteudo.appendChild(slideDireita);
  }
}

function fechaModal(id) {
  if (id === 1) {
    const modal = document.querySelector(".modal");
    modal.remove();
  } else if (id === 2) {
    const lightbox = document.querySelector(".lightbox");
    lightbox.remove();
  }
}

montaModal(1);
