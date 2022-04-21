//De objeto JSON para string
const OBJ = { nome: "Bono", idade: 37 }

//console.log(JSON.stringify(OBJ));

//De string ara objeto JSON
const STR = '{"nome": "Bono", "idade": 37}';

//console.log(JSON.parse(STR));

//OBJ.fazCompra();


localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

//console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

//console.log(IDADE);


/*
document.querySelector('input.btn').addEventListener('click', function(evento) {
    //alert('Voce clicou em mim ( ͡° ͜ʖ ͡°)');
    evento.preventDefault(); //previne que algo não desejável aconteça
    const TAREFA = '{"tarefa": "' + document.querySelector('#task').value + '"}';

    document.querySelector('#task').value = '';

    console.log(JSON.parse(TAREFA));

    localStorage.setItem('tarefa', TAREFA);


});
*/

const TRF = localStorage.getItem('tarefa');

if (TRF)
    document.querySelector('#exibe').innerText = TRF;


//Recupera o valor do input preenchido pelo usuário e adiciona no storage
document.querySelector('input.btn').addEventListener('click', function(e) {
    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;

    let tarefas;

    if (localStorage.getItem('tarefas') === null)
        tarefas = [];
    else
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    tarefas.push(TAREFA);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    console.log(tarefas);

    document.getElementById('task').value = '';
});

//Para sessionStorage é sótrocar todos localStorage para sessionStorage