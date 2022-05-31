let output = document.getElementById('output');

document.getElementById('btn').addEventListener('click', adivinharNome);

let name = document.getElementById('nameInput');

document.getElementById('nameInput').addEventListener('change', Checagem);

function adivinharNome() {
    let name = nameInput.value;

    fetch('https://api.agify.io?name=' + name, { method: 'GET' })
        .then(function(response) { return response.json(); })
        .then(data => {
            if (name != '') {
                output.innerHTML = "Eu acho que você tem " + data.age + " anos &#129300";
                output.style.display = 'block';
                console.log(data.age);
            } else {
                output.style.display = 'none';
            }


        })
        .catch(err => console.log(err));
}

function Checagem() {
    let name = nameInput.value;
    if (name == '') {
        output.style.display = 'none';
    }
}