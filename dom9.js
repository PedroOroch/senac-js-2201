//Quando clico no elemnto mais interno em uma cadeia elementos com
//Event Listener, todos eventos dos elementos mais externos são acionados
document.querySelector('.card-title').addEventListener('click', function(e) {
    console.log('Título');
    //console.log(e.target); //aponta para um elemento
});

document.querySelector('.card-content').addEventListener('click', function(e) {
    console.log('Form');
    //console.log(e.target); //aponta para um elemento
});

document.querySelector('.card').addEventListener('click', function(e) {
    console.log('Tudo');
    //console.log(e.target); //aponta para um elemento
});