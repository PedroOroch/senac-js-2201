const tamanho = window.innerHeight + 'x' + window.innerWidth; //exibir dimensoes da tela

const paragrafoAlt = document.querySelector('p'); // pegar um elemento e especifico

const navegador = window.navigator; //informacoes do navegador

console.log(navegador);

console.log(tamanho);

const paragrafo = document.getElementById('paragrafo');

paragrafo.innerText = tamanho;

paragrafoAlt.style.textAlign = 'center';

paragrafo.innerText = navegador;