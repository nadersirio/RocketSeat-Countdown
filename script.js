function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
          timer = 0;
      }
  }, 1000);
}
window.onload = function () {
  var duration = 60 * 0.04; // Converter para segundos
      display = document.getElementById('contador'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
};
