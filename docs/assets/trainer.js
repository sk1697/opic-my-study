let opicTimer = null;
let opicRemaining = 60;

function renderTimer() {
  const display = document.querySelector('[data-timer-display]');
  if (!display) return;
  const minutes = Math.floor(opicRemaining / 60).toString().padStart(2, '0');
  const seconds = (opicRemaining % 60).toString().padStart(2, '0');
  display.textContent = `${minutes}:${seconds}`;
}

function setTimer(seconds) {
  opicRemaining = seconds;
  renderTimer();
}

function startTimer() {
  if (opicTimer) return;
  opicTimer = window.setInterval(() => {
    opicRemaining = Math.max(0, opicRemaining - 1);
    renderTimer();
    if (opicRemaining === 0) {
      window.clearInterval(opicTimer);
      opicTimer = null;
    }
  }, 1000);
}

function pauseTimer() {
  if (opicTimer) {
    window.clearInterval(opicTimer);
    opicTimer = null;
  }
}

window.addEventListener('DOMContentLoaded', renderTimer);
