const time = document.getElementById("time");
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");

let seconds = 70; //used let to create starting point for time
//Define interval globally cause it's used in multiple functions
let interval = null;

//Event Listeners
startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", restartTimer);
stopBtn.addEventListener("click", stopTimer);

function timerLogic() {
  seconds++;
  let hour = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hour * 3600) / 60);
  let sec = seconds % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  time.innerHTML = `${hour}:${min}:${sec}`;
}
//If there is an interval, function will simply return. If there isn't, the value of interval is put to setInterval. It is put inside set interval so value can be changed on stop.
function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timerLogic, 1000);
  //When you think about it, this is what a regular setInterval looks like. Function is just defined elsewhere.
}

//To stop interval, simply call clearInterval
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function restartTimer() {
  stop();
  seconds = 0;
  time.innerHTML = "00:00:00";
}
