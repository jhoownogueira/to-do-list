const inputTarefa = document.getElementById('tarefa');
const btnInputTarefa = document.getElementById('btn-adicionar');
const areaTarefa = document.getElementById('js-taferas-container');

verificarCampoText();
function verificarCampoText() {
    if(inputTarefa.value == '') {
        btnInputTarefa.setAttribute("disabled", true);
    } else {
        btnInputTarefa.removeAttribute("disabled", true);
    }
}

btnInputTarefa.addEventListener('click', () => {
        CriarTarefa();  
});

function CriarTarefa() {

    let tarefa = document.createElement('div');
    tarefa.classList = 'tarefa';
    areaTarefa.appendChild(tarefa);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    tarefa.appendChild(checkbox);

    let textTarefa = document.createElement('p');
    textTarefa.innerText = inputTarefa.value;
    tarefa.appendChild(textTarefa);

    inputTarefa.value = '';
    verificarCampoText();
}