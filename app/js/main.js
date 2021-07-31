let time = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let date = new Date();

date.setDate(1);
let getDaysEvent = 1;
let getHoursNow = 1;
let getMinutesNow = 20;
let getSecondsNow = 1;

time.innerHTML = getDaysEvent;
hours.innerHTML = getHoursNow;
minutes.innerHTML = getMinutesNow;
seconds.innerHTML = getSecondsNow;


function lastSeconds(){
if(getHoursNow == 0 && getMinutesNow == 0 && getDaysEvent == 0){
    console.log(getSecondsNow); 
    getSecondsNow--;
    seconds.innerHTML = getSecondsNow;
    console.log(getSecondsNow); 
    
   if(getSecondsNow == 0){
        
        seconds.innerHTML = 0;
       console.log("Финиш");
       clearInterval(lastSecondInterval);
       return 0;
   }
}
}
function eventCount(){
    
    getSecondsNow--;
    seconds.innerHTML = getSecondsNow;
 
    if(getMinutesNow == 1 && getHoursNow == 0 && getDaysEvent == 0 && getSecondsNow == 0){
        getMinutesNow = 0;
        minutes.innerHTML = getMinutesNow;
        getSecondsNow = 61;
        seconds.innerHTML = getSecondsNow;
        clearInterval(interval);
        lastSeconds();
        return 0;
    }
    
    if(getSecondsNow == 0){
        getMinutesNow--;
        minutes.innerHTML = getMinutesNow;
        getSecondsNow = 59;
        seconds.innerHTML = getSecondsNow;
    }
    
    if(getMinutesNow == 0){
        getHoursNow--;
        hours.innerHTML = getHoursNow;
        getMinutesNow = 59;
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

// const interval = setInterval(eventCount, 0.00000000000001);


// const lastSecondInterval = setInterval(lastSeconds, 1000);