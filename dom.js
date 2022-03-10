const p = document.getElementById('paragrafo');

//p.innerText = 'Meu Texto!';


//p.style.background = 'red';

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