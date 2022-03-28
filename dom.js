const p = document.getElementById('paragrafo'); //pega um elemento do html para o js

//p.innerText = 'Meu Texto!'; Altera o texto do elemento


//p.style.background = 'red'; Altera o estilo do elemento

console.log(p);

let cores = [
    '#f35',
    '#C3C',
    '#fc0',
    '#FC6',
    '#9c0'
]; //Array com cores

for (i = 0, c = 0; i <= 1000; i++, c++) { // estrutura de repetição com as cores


    console.log(p.style.background = cores[c]);

    if (c >= 4) // indice do vetor, usado para a matriz começar do zero
        c = -1;
}