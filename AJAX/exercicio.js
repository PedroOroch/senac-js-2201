document.querySelector('#fetch').addEventListener('click', carregaConteudo);

function carregaConteudo() {
    fetch('http://10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado) {
        return resultado.text();
    }).then(function(conteudo) {
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}

console.log(carregaConteudo());