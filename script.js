//  const second = 1000;
//  const minute = second * 60;
//  const hour = minute * 60;
//  const day = hour * 24;
//
//  function startTimer(duration, display) {
//    var timer = duration, days, hours, minutes, seconds;
//    setInterval(function() {
//      const days = Math.floor(timer / day);
//      const hours = Math.floor((timer % day) / hour);
//      const minutes = Math.floor((timer % hour) / minute);
//      const seconds = Math.floor((timer % minute) / second);
//      console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
//        display.innerHTML = "<p class='timer'>" + days + ":" + hours + ":" + minutes + ":" + seconds + "</p>";
//        if (--timer < 0) {
//            timer = 0;
//        }
//    }, 1000);
//  }
//  window.onload = function () {
//    var duration = 500; // Converter para segundos
//        display = document.getElementById('contador'); // selecionando o timer
//    startTimer(duration, display); // iniciando o timer
//  };



//let dayField = document.getElementById('day');
//let hourField = document.getElementById('hour');
//let minuteField = document.getElementById('minute');
//let secondField = document.getElementById('second');//
//let interval;
//const eventDay = new Date('03/03/2022');//
//const second = 1000;
//const minute = second * 60;
//const hour = minute * 60;
//const day = hour * 24;//
//const countDownFn = () => {
//  everySecond = setInterval(countDownFn, second)
//  let now = new Date();
//let timeSpan = eventDay - now;//
//if (timeSpan <= -1000) {
//  console.log("Infelizmente passamos do dia do evento");
//  clearInterval(interval);
//  return;
//} else if (timeSpan <= 0) {
//  console.log("O evento é hoje");
//  clearInterval(interval);
//  return;
//} else {
//  const days = Math.floor(timeSpan / day)
//  const hours = Math.floor((timeSpan % day) / hour)
//  const minutes = Math.floor((timeSpan % hour) / minute)
//  const seconds = Math.floor((timeSpan % minute) / second)//
//  console.log(days + ":" + hours + ":" + minutes + ":" + seconds);//
//  dayField.innerHTML = days;
//  hourField.innerHTML = hours;
//  minuteField.innerHTML = minutes;
//  secondField.innerHTML = seconds;
//}
//}
//countDownFn();//

const end = new Date('Sep 13, 2082 00:00:00').getTime();
const yearEl = document.getElementById('years');
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;
const years = days * 365;

const x = setInterval(function () {
  let now = new Date().getTime();
  const difference = end - now;

  if (now > end) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = "Viagem para Jupiter, iniciada!! 🚀";
    lista = document.getElementById("lista");
    lista.classList.remove("listaON");
    lista.classList.add("listaOFF");
    return;
  }
  yearEl.innerText = Math.floor(difference / years);
  dayEl.innerText = Math.floor((difference % years) / days);
  hoursEl.innerText = Math.floor((difference % days) / hours);
  minutesEl.innerText = Math.floor((difference % hours) / minutes);
  secondsEl.innerText = Math.floor((difference % minutes) / seconds);
}, seconds);


function inscrever() {
  window.open("https://github.com/nadersirio");
}