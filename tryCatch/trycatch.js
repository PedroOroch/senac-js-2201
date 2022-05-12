try {

    let a = "b";
    if (typeof a == 'boolean') {
        throw new SyntaxError('A tem que ser inteiro')
    }
    //executaMinhaFuncao();
} catch (erro) {
    console.log(erro.message)
} finally {

    console.log('Se der erro ou não, esse código é executado');
}

/*
+------------+
| EXERCÍCIOS |
+------------+


EXEMPLO-----------------------------------------------------
document.querySelector('#fetch').addEventListener('click', carregaConteudo);

function carregaConteudo() {

    try { //usando try Catch
        fetch('http://10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado) {
            return resultado.text();
        }).then(function(conteudo) {
            const OBJ = JSON.parse(conteudo);

            document.querySelector('ul').innerHTML = '';

            const UL = document.querySelector('ul');

            const NOME = OBJ.moedas;
            const VALUE = OBJ.valores;

            for (let i = 0; i < NOME.length; i++) {
                let list = document.createElement('li');
                const TEXT = document.createTextNode(NOME[i] + ': ' + VALUE[i]);

                list.appendChild(TEXT);
                UL.appendChild(list);
            }

        });
    } catch (e) {
        alert('Problem ao obter os dados: ' + e.message)
    }
}


console.log(carregaConteudo());
-----------------------------------------------------

1-----------------------------------------------------

try {
    carregaMonitorDeEventos();
} catch (e) {
    alert('Ocorreu um Problema: ' + e.message);
}

-----------------------------------------------------

2-----------------------------------------------------

    function apagaTodasTarefas(evento) {
    try {
        evento.preventDefault();

        LISTA.innerHTML = '';

        apagaTodosLocalStorage();
    } catch (e) {
        alert('Ocorreu um Problema: ' + e.message);
    }
}

-----------------------------------------------------

3-----------------------------------------------------

  try {
        let tarefas;

        if (localStorage.getItem('tarefas') === null)

            tarefas = [];

        else {

            tarefas = JSON.parse(localStorage.getItem('tarefas'));
        }
        tarefas.push(tarefa.value);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));

    } catch (e) {
        alert('Ocorreu um Problema: ' + e.message);
    }


-----------------------------------------------------

*/