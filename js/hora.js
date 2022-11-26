const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');


const relogio = setInterval(function tempo() {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();

    if(hr < 10){
        hr = `0${hr}`;
    }

    if(min < 10){
        min = `0${min}`;
    }

    horas.textContent = hr;
    minutos.textContent = min;
})
