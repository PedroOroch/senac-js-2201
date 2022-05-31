let btnEnter = document.querySelector(".btn");
let card = document.querySelector(".card");


btnEnter.addEventListener("click", pegarFato);

function pegarFato() {
    let input = document.querySelector(".input").value;
    let cardTitulo = document.querySelector(".card-title");
    let cardTexto = document.querySelector(".card-text");

    if (input !== "") {
        card.classList.remove("d-none");


        fetch(`http://numbersapi.com/${input}`).then(resposta => resposta.text()).then(data => {
            cardTitulo.innerHTML = input;
            cardTexto.innerHTML = data;
        }).catch((err) => console.log(err));
    }
}

let btnCopiar = document.querySelector(".copy-btn");
btnCopiar.addEventListener("click", () => {
    copiarTexto();
})

function copiarTexto() {
    const TXTAREA = document.createElement("textarea");
    let cardTexto = document.querySelector(".card-text").innerHTML;

    TXTAREA.value = cardTexto;
    document.body.append(TXTAREA);
    TXTAREA.select();
    document.execCommand("copy");
    TXTAREA.remove();
    alert("Fato copiado!");
}