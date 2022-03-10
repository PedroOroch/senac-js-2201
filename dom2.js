const p = document.getElementById('paragrafo');

//p.innerText = 'Meu Texto!';


if (confirm('Quer entrar com um valor?')) {

    let valor = prompt('Entre com um número de 0 a 10');

    if (valor >= 0 && valor <= 10) {

        p.innerText = '';

        for (i = 0; i < valor; i++) {
            p.innerText = p.innerText + "Orocheetos\n";

        }


    } else {

        p.innerText = 'Valor Inválido'
    }

} else {
    p.innerText = 'que pena que você não entrou com um valor :(';
}

//p.style.background = 'red';

/*
console.log(p);




let cores = [
    '#f35',
    '#C3C',
    '#fc0',
    '#FC6',
    '#9c0'
];

for (i = 0, c = 0; i <= 1000; i++, c++) {


    console.log(p.style.background = cores[c]);

    if (c >= 4)
        c = -1;
}
*/