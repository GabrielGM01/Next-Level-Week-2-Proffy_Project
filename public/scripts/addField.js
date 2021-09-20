// Procura o botão
document.querySelector('#add-time')
//quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField(){
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar
    fields.forEach(e => e.value = '');
    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}