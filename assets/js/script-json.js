let dados = "";

let requestUrl = 'assets/js/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function () {
    dados = request.response;
    // console.log(dados);
    slide.setAttribute('src', dados.obras[0].image.webp);
    descriptionSlide.innerHTML = dados.obras[0].descricao;
}
