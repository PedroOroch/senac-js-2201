//function nomeDaFunção(){}

function olaMundoNoLog(nome) {
    console.log(`Olá ${nome}!`);
}

olaMundoNoLog("Camila");


//Function Expressions - colocar uma função em um objeto

const SOMA = function(a, b) {
    return a + b;
}

let resultado = SOMA(2, 2);

console.log(resultado);

//Immediately Invoked Function Expression (IIFE) - Você declara e já chama ao mesmo tempo

(function(a, b) {
    console.log(a + b);
})(3, 3);


function retornaUltimo(vetor) {
    return vetor[vetor.length - 1];
}

console.log(retornaUltimo([1, 2, 3, 4, 5]));

//em um Objeto(método)

let aluno = {
    nome: "Amanda",
    matricula: 8916213,
    setNome: function(n) {
        console.log("Muda Nome");
    }
}

aluno.setNome("BlaBLa");

//Exercício datas

let hoje = new Date();

console.log(hoje.getSeconds());



function nomeDoMes() {

    const MES = ['Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]; // uma função com uma matriz compondo o nome dos meses

    let atual = new Date; //Objeto com informações dia mes anos

    return MES[atual.getMonth()];
}

console.log(nomeDoMes());