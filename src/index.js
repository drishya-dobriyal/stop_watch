const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
let timerInterval = null;
let currentTime = 0;

/* Utility Function */
function formatVal(val) {
  if (val < 10) return "0" + val;
  return "" + val;
}

/* Provide Time in form of Hours, seconds, minutes */
function getTime(time) {
  console.log("time: ", time);
  let currTime = time;
  let seconds = formatVal(currTime % 60);
  currTime = parseInt(currTime / 60);
  let minutes = formatVal(currTime % 60);
  currTime = parseInt(currTime / 60);
  let hours = formatVal(currTime);
  return {
    hours,
    minutes,
    seconds,
  };
}

/* Start Timer */
function startTimer() {
  document.getElementById("start-btn").disabled = true;
  timerInterval = setInterval(function () {
    currentTime++;
    const { hours, minutes, seconds } = getTime(currentTime);
    if (hoursEle.innerText != hours) {
      hoursEle.innerText = hours;
    }
    if (minutesEle.innerText != minutes) {
      minutesEle.innerText = minutes;
    }
    if (secondsEle.innerText != seconds) {
      secondsEle.innerText = seconds;
    }
  }, 1000);
}
/* Stop Timer */
function stopTimer() {
  console.log("Stop Timer...");
  clearInterval(timerInterval);
  document.getElementById("start-btn").disabled = false;
}
/* Reset Timer */
function resetTimer() {
  console.log("Reset Timer");
  clearInterval(timerInterval);
  hoursEle.innerText = "00";
  minutesEle.innerText = "00";
  secondsEle.innerText = "00";
  currentTime = 0;
  document.getElementById("start-btn").disabled = false;
}
document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
