const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('h1'),
  dateTitle = clockContainer.querySelector('h4');

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  dateTitle.innerText = `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
