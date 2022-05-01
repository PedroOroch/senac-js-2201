document.querySelector('#fetch').addEventListener('click', carregaConteudo);

function carregaConteudo() {
    fetch('http://10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado) {
        return resultado.text();
    }).then(function(conteudo) {
        const OBJ = JSON.parse(conteudo);

        const UL = document.querySelector('ul');

        const NOME = OBJ.moedas;
        const VALUE = OBJ.moedas;

        for (let i = 0; i < NOME.length; i++) {
            let list = document.createElement('li');
            const TEXT = document.createTextNode(NOME[i] + ': ' + VALUE[i]);

            list.appendChild(TEXT);
            UL.appendChild(list);
        }

    });
}

console.log(carregaConteudo());