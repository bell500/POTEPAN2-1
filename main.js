const COUNTER = document.getElementById(`counter`);
const START = document.getElementById(`start`);
const STOP = document.getElementById(`stop`);
const RESET = document.getElementById(`reset`);

let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds =0;

let stopWatch = () => {
    milliseconds++;
  
    if (milliseconds >9) {
         seconds++;
         milliseconds = 0;
     }else if (seconds >59) {
         minutes++;
         seconds = 0
     }else if (minutes >59 ) {
         hour++;
         minutes= 0
     }
    
    
    COUNTER.innerHTML = hour + `:` +  minutes + `:` + seconds + `:` + milliseconds; 
}

let interval;

START.addEventListener(`click` , () => {
    interval =setInterval(stopWatch, 100);
    START.disabled= true;
    STOP.disabled= false;
    RESET.disabled= true;
    //スタートしたらボタンが消えた
    //カウントが始まると「00」の２桁になる
})

STOP.addEventListener(`click`, () => {
    clearInterval(interval);
    START.disabled = false;
    STOP.disabled = true;
    RESET.disabled = false;
})

RESET.addEventListener(`click` , () => {
   COUNTER.innerHTML = `0:0:0:0` ;
   minutes = 0;
   seconds = 0;
   START.disabled = false;
   STOP.disabled = true;
   RESET.disabled =true;
})

//function formatTime()