document.querySelector('input.btn').addEventListener('click', function(evento) {
    //alert('Voce clicou em mim ( ͡° ͜ʖ ͡°)');
    evento.preventDefault(); //previne que algo não desejável aconteça
    console.log(evento.target.className);

    const VALOR_DO_USUARIO = document.querySelector('input#task').value;

    console.log(VALOR_DO_USUARIO);

    //Criando o elemento li
    const LI = document.createElement('li');
    LI.className = ('collection-item'); //atribuição de classe para um elemento
    LI.id = 'nova-tarefa-qualquer'; //atriubuição de id para um elemento
    LI.setAttribute('title', 'Pare o mouse para ver'); //adicionando um atributo para um elemento
    //FIM colocando o elemento li
    //Criamos um texto para colocar em li
    const TXT = document.createTextNode(VALOR_DO_USUARIO);
    LI.appendChild(TXT); //Coloca um elemento dentro do outro
    console.log(LI);
    //Criando elemento a
    const X = document.createElement('a');
    X.className = ('delete-item secondary-content');
    X.setAttribute('href', '#');
    //FIM criando elemento a
    //Criando elemento i
    const I = document.createElement('i');
    I.className = ('fa fa-remove');
    //Fim criando element i
    console.log(X);
    X.appendChild(I); //Colocamos o i no a
    LI.appendChild(X); //Colocamos o a no li
    //capturando o elemento ul para poder inserir o li
    const UL = document.querySelector('ul.collection');
    UL.appendChild(LI); //colocamos o li no ul

});

/*
document.getElementById('senac').addEventListener('click', function(evento) {
    evento.preventDefault();
})
*/



//COM CLICK

document.querySelector('span.card-title').addEventListener('click', function(color) {

    document.querySelector('#task-title').style.color = 'red';

});



/*
    COM MOUSE HOVER

document.querySelector('span.card-title').addEventListener('mouseover', function(color) {

    document.querySelector('#task-title').style.color = 'red';

});
    
*/

//Limpa tarefas (minha versao)
const LIMPAR = document.querySelector('ul');
const ITENS = document.querySelectorAll('li');

document.querySelector('a.btn').addEventListener('click', function(clear) {
    clear.preventDefault();
    ITENS.forEach(function(val, ind) {
        LIMPAR.removeChild(ITENS[ind]);
    });
});
//Fim limpa tarefas

/*
    Limpa tarefas (Versão Boninho)

    const BTN_BLACK = document.getElementByClassName('clear-tasks btn black');

    BTN_BLACK[0].addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('ul').remove();
    })

*/

const CARD = document.querySelector('.card');
const TITULO = document.querySelector('h5');

CARD.addEventListener('mouseover', mostraEvento);

function mostraEvento(evento) {
    console.log(`mouseover: ${evento.type}`);
    TITULO.textContent = `Eixo X: ${evento.offsetX} Eixo Y: ${evento.offsetY}`;
    //Going brega
    document.body.style.backgroundColor = `rgb(${evento.offsetX},${evento.offsetY}, 900)`;
}