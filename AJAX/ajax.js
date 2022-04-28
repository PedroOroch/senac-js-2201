/*

EXEMPLO COM XMLHTTPREQUEST

document.querySelector('#xhr').addEventListener('click', carregaConteudo);

function carregaConteudo() {

    const XHR = new XMLHttpRequest();

    XHR.open('GET', 'http://10.135.236.35:5500/AJAX/conteudo.txt', true); // true = assíncrono, síncrono está sendo descontinuado

    XHR.onload = function() {
        if (this.status === 200) //HTTP code 2000 OK
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;

    }

    XHR.send(); //Realiza a requisição
}
*/

//Exemplo com Fetch

document.querySelector('#fetch').addEventListener('click', carregaConteudo);

function carregaConteudo() {
    fetch('conteudo.txt').then(function(resultado) {
        return resultado.text();
    }).then(function(conteudo) {
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}