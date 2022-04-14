//De objeto JSON para string
const OBJ = { nome: "Bono", idade: 37 }

console.log(JSON.stringify(OBJ));

//De string ara objeto JSON
const STR = '{"nome": "Bono", "idade": 37}';

console.log(JSON.parse(STR));

//OBJ.fazCompra();


localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(evento) {
    //alert('Voce clicou em mim ( ͡° ͜ʖ ͡°)');
    evento.preventDefault(); //previne que algo não desejável aconteça
    const TAREFA = '{"tarefa": "' + document.querySelector('#task').value + '"}';

    document.querySelector('#task').value = '';

    console.log(JSON.parse(TAREFA));

    localStorage.setItem('tarefa', TAREFA);


});

const TRF = localStorage.getItem('tarefa');

if (TRF)
    document.querySelector('#exibe').innerText = TRF;