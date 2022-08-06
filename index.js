const selectOpcoes = document.querySelectorAll('select');
const horaAtual = document.querySelector('h1')

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
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    horaAtual.innerText = `${h}:${m}:${s} ${session}` 


    // console.log(`${h}:${m}:${s} ${session}`)
}, 1000)
