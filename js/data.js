const datas = document.getElementById('data');

function mostraData() {
    let dt = new Date();
    
    let dia = dt.getDate();
    let mes = dt.getMonth();
    let ano = dt.getFullYear();

    if(dia < 10) {
        dia = `0${dia}`;
    }

    let meses = new Array ("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

    let data = `${dia} de ${meses[mes]} de ${ano}`;

    return data
}

datas.textContent = mostraData();