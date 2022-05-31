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

+-------------------------+
| tentei fazer com POO :( |
+-------------------------+

*/

function calcularIMC() {
    // pegando o id do formulario
    let form = document.getElementById("form");

    // kilos é minha variavel
    // formulario é o id do meu formulario
    // value é o valor do input
    // o + na frente transforma em number a string	

    let kg = +form.kg.value;
    let m = +form.m.value;
    let cm = +form.cm.value;

    // altura
    let altura = (m * 100 + cm) / 100;

    // imc
    let imc = kg / (altura * altura);

    // o metodo toFixed fixa apenas duas casas decimais apos o ponto.
    form.imc.value = imc.toFixed(2);

    if (imc < 20) {
        alert('Você esta abaixo do peso!');
    } else if (imc > 20 && imc <= 25) {
        alert("Peso Ideal");
    } else if (imc > 25 && imc <= 30) {
        alert("Sobrepeso");
    } else if (imc > 30 && imc <= 35) {
        alert("Obesidade Moderada");
    } else if (imc > 35 && imc <= 40) {
        alert("Obesidade Severa");
    } else if (imc > 40 && imc <= 50) {
        alert("Obesidade Morbida");
    } else {
        alert('Gordo');
    }
}