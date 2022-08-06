const selectOpcoes = document.querySelectorAll('select');
const horaAtual = document.querySelector('h1');
const btnAlarm = document.querySelector('button');
const seletores = document.querySelector('.flexoptions');

var alarmTime;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectOpcoes[0].firstElementChild.insertAdjacentHTML("afterend", option);  
}

for (let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectOpcoes[1].firstElementChild.insertAdjacentHTML("afterend", option);
    
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM"
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectOpcoes[2].firstElementChild.insertAdjacentHTML("afterend", option);
    
}

// Clock 24h JS

setInterval(() =>{
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    if(h == 0){
        h = 12;}

    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    horaAtual.innerText = `${h}:${m}:${s} ${session}` 
    if(alarmTime == `${h}:${m}:${session}`){
        console.log("oi")
    }


    
    // console.log(`${h}:${m}:${s} ${session}`)
}, 1000)


btnAlarm.addEventListener("click", setAlarm)

function setAlarm(){
    
    let time = `${selectOpcoes[0].value}:${selectOpcoes[1].value}:${selectOpcoes[2].value}`;
    
    if (time.includes("Horas") || time.includes("Minutos") || time.includes("AM/PM")){
        return alert("Você precisa selecionar a hora desejada!")
    }
    alarmTime = time;
    seletores.classList.add("disable");
    btnAlarm.innerText = "Resetar o Alarme"

    }



