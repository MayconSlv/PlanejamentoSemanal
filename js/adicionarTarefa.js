const botaoAdicionar = document.getElementById('botao-adicionar');
const atvContainer = document.querySelector('.lista__overflow');
var atvInput = document.querySelector('.atividade__input');


botaoAdicionar.addEventListener("click", criaTexto);

function criaTexto() {
    const data = document.getElementById('diaSemana').value
    console.log(data)

    if (data == 'semValor') {
        alert('escolha um dia')
    } else if (atvInput.value == ''){
        atvInput.classList.add('error')
    } else {
        atvInput.classList.remove('error')
        const atvBarra = document.createElement('div')
        atvBarra.classList.add('lista__atividades')
        atvBarra.innerHTML = `
        <p class="horario-atividade ${data+'-hora'}">10h30m</p>
        <span class="lista__borda ${data}"></span>
        <p class="lista__atividades-texto">${atvInput.value}
        <button class="lista-apagar">Apagar</button></p>
    `
    atvContainer.appendChild(atvBarra)
    atvInput.value = ''
    atvInput.focus()
    }
}

//apagar todos

// apagar atividade

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")

    if(targetEl.classList.contains("lista-apagar")){
        parentEl.remove()
    }

})