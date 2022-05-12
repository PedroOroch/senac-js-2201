/*

class Usuario {

    constructor() {
        this.nome = 'Oroch';
    }

    listar() {

        this.mostraMensagem();
    }

    editar() {
        console.log('Edita usuario');
    }

    cadastrar(params) {
        console.log('cadastro feito');
    }

    mostraMensagem() {
        alert('Mensagem para usuário');
    }
}

let user = new Usuario;


user.listar();

*/

class Calculadora {

    constructor() {
        this.calcula();

    }

    calcula() {
        const N1 = document.getElementById('num1').value;
        const N2 = document.getElementById('num2').value;

        console.log(N1);

        const RESULT = this.subtracao(N1, N2);

        this.exibeResultado(RESULT);
    }

    soma(nm1, nm2) {

        let x = Number(nm1);
        let y = Number(nm2);
        return x + y;
    }

    subtracao(nm1, nm2) {

        let x = Number(nm1);
        let y = Number(nm2);
        return x - y;
    }

    exibeResultado(RECEBA) {
        document.getElementById('resultado').innerText = RECEBA;
    }
}

new Calculadora;