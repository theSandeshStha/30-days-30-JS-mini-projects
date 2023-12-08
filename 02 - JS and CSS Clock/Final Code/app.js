const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();

  const sec = now.getSeconds();
  const secHand = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secHand}deg)`;

  const min = now.getMinutes();
  const minHand = (min / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minHand}deg)`;

  const hr = now.getHours();
  const hrHand = (hr / 12) * 360 + 90; //12 placeholders for an hour, unlike 60 for secs and mins
  hourHand.style.transform = `rotate(${hrHand}deg)`;
}

setInterval(setTime, 1000);
