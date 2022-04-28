/*

//EXEMPLO COM CALLBACK

const POST = [
    { titulo: 'Post Um', cont: 'Conteúdo post um' },
    { titulo: 'Post dois', cont: 'Conteúdo post dois' }
]

function criaPost(post, callback) {
    postMessage.push(post);
    callback();
}

function getPosts() {

    let saida = '';

    POST.forEach(function(post) {
        saida += `<li>${post.titulo}</li>`
    });

    document.body.innerHTML = saida;
}

criaPost({ titulo: 'Post Três', cont: 'Conteudo do post Três' }, getPosts);
criaPost({ titulo: 'Post Quatro', cont: 'Conteudo do post Quatro' }, getPosts);
*/


//EXEMPLO COM PROMISE

const POSTS = [
    { titulo: 'Post Um', cont: 'Conteúdo post um' },
    { titulo: 'Post dois', cont: 'Conteúdo post dois' }
]



function criaPost(post) {
    return new Promise(function(resolve, rejeita) {

        const ERR = true;

        if (!ERR) {
            POSTS.push(post);
            resolve();
        } else {
            rejeita('Erro, não foi possível executar');
        }

    })
}

function getPosts() {
    let saida = '';
    POSTS.forEach(function(post) {
        saida += `<li>${post.titulo}</li>`;
    });

    document.body.innerHTML = saida;
}

criaPost({ titulo: 'Post Três', cont: 'Conteúdo post três' }).then(getPosts).catch(function(erro) {
    console.log(erro);
});