const divClock = document.querySelector(`#clock`); 

function clock(){
    let time = new Date();
    let hour = String(time.getHours()).padStart(2,0);
    let minute = String(time.getMinutes()).padStart(2,0);
    let second = String(time.getSeconds()).padStart(2,0);

    return `${hour}:${minute}:${second}`;
}

setInterval(function(){
    divClock.innerHTML = clock();
},1000);