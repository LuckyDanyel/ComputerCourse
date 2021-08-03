let time = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let burgerBlock = document.querySelector('#burger__menu');
let menu = document.querySelector('#menu');

let date = new Date();

date.setDate(1);
let MountEvent = 9;
let getDaysEvent = 24;
let getHoursNow = 3;
let getMinutesNow = 4;
let getSecondsNow = 30;

time.innerHTML = getDaysEvent;
hours.innerHTML = getHoursNow;
minutes.innerHTML = getMinutesNow;
seconds.innerHTML = getSecondsNow;

burgerBlock.addEventListener('click', first);


function first(e){
    
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    burgerBlock.onclick = second;
    menu.style.display = 'flex';
}
function second(){
    menu.style.display = 'none';
    burgerBlock.onclick = first;
    
}

function lastSeconds(){
if(getHoursNow == 0 && getMinutesNow == 0 && getDaysEvent == 0){

    getSecondsNow--;
    seconds.innerHTML = getSecondsNow;
   
    
   if(getSecondsNow == 0){
        
        seconds.innerHTML = 0;
       console.log("Финиш");
       clearInterval(lastSecondInterval);
       return 0;
   }
}
}
function eventCount(){
    if(getSecondsNow > 0) {
    getSecondsNow--;
    seconds.innerHTML = getSecondsNow;
    }
    console.log(getMinutesNow);
 
    if(getMinutesNow == 1 && getHoursNow == 0 && getDaysEvent == 0 && getSecondsNow == 0){
        getMinutesNow = 0;
        minutes.innerHTML = getMinutesNow;
        getSecondsNow = 61;
        seconds.innerHTML = getSecondsNow;
        clearInterval(interval);
        lastSeconds();
        return 0;
    }
    
    if(getSecondsNow == 0 && getMinutesNow != 0){
        getMinutesNow--;
        minutes.innerHTML = getMinutesNow;
        getSecondsNow = 59;
        seconds.innerHTML = getSecondsNow;
    }
    
    if(getMinutesNow == 0 && getSecondsNow == 0){
        getHoursNow--;
        hours.innerHTML = getHoursNow;
        getMinutesNow = 60;
        minutes.innerHTML = getMinutesNow;
    }
    
    if(getHoursNow == 0 && getDaysEvent != 0){
        getDaysEvent--;
        time.innerHTML = getDaysEvent;
        getHoursNow = 23;
        hours.innerHTML = getHoursNow;

    }
    if(getHoursNow == 0 && getDaysEvent == 0){
        getDaysEvent = 0;
        time.innerHTML = getDaysEvent;
        getHoursNow = 0;
        hours.innerHTML = getHoursNow;
    }
    if(getDaysEvent == 0 && getHoursNow == 0 && getMinutesNow == 0 && getSecondsNow == 0){
        return null;
    }
    
}


const interval = setInterval(eventCount, 1000);


const lastSecondInterval = setInterval(lastSeconds, 1000);