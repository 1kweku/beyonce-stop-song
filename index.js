const time = document.getElementById("timer");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const restart = document.getElementById("restart");

let sec = 0; //used let to create starting point for time

const timerLogic = () => {
  setInterval(() => {
    time.innerHTML = "00:" + sec; //InnerHTML of time element is set to 0 and adds second, second increases by 1
    sec++;
  }, 1000); //interval defined
};

timerLogic();
