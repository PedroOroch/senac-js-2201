const ITENS = document.querySelectorAll('li');
const LISTA = document.querySelector('ul');

//ITENS[2].remove(); //remove u item

//LISTA.removeChild(ITENS[2]);

//LISTA.remove(); //apaga tudo o que está na ul


ITENS.forEach(function(val, ind) {
    LISTA.removeChild(ITENS[ind]);
});


const LABEL = document.querySelector('label');
const NTSK = document.getElementById('task');
const BOX = document.getElementsByClassName('btn');

//console.log(BOX);


LABEL.remove();
NTSK.remove();