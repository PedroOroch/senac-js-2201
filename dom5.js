//#f0f Elementos Unicos

//console.log(document.querySelector('li:last-child').innerText);
//console.log(document.querySelector('li:first-child').innerText);
//console.log(document.querySelector('li:nth-child(2)').innerText);
//console.log(document.querySelector('li:nth-child(3)').innerText);

//#8f0 Elementos Multiplos

/*
console.log(document.getElementsByClassName('collection-item'));

const itens = document.getElementsByClassName('collection-item');

itens[1].style.color = 'blue';
*/

/*
const itens = document.querySelector('ul').getElementsByClassName('collection-items');
itens[3].style.color = 'red';
*/

/*
const itens = document.getElementsByTagName('li');
itens[1].style.color = 'green';
itens[3].style.color = 'red';
itens[0].style.color = itens[2].style.color = 'yellow';
*/

const itens = document.getElementsByTagName('li');


/*
itensArray.forEach(function(li, indice) {
    console.log(`${indice}: ${li.innerText}`);
});

*/

let itensImpares = document.querySelector('li:nth-child(odd)');


let itensArray = Array.from(itensImpares);

itensArray.forEach(function(item) {
    item.style.background = '#dedede';
});



//ou even para itens Pares

//itens[0].style.background = itens[2].style.background = 'gray'