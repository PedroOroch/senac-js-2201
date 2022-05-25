/*

class imcCalculadora {

    constructor() {
        this.calcula();
    }

    calcula() {
        const N1 = document.getElementById('num1').value;
        const N2 = document.getElementById('num2').value;

        const RESULT = this.imc(N1, N2);

        this.exibeResultado(RESULT);

    }

    imc(nm1, nm2) {
        let x = Number(nm1);
        let y = Number(nm2);

        return x / (y) ^ 2;
    }

    exibeResultado(RECEBA) {
        document.getElementById('resultado').innerText = RECEBA;
    }
}

new imcCalculadora;
*/

let x = 50
let y = 1.47

let imc = x / (y) ^ 2;

document.write(resultado);