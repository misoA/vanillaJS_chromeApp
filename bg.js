const body = document.querySelector('body');
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber}.jpg`;
  image.classList.add('bgImage');
  body.prepend(image);
}

function genRandom() {
  return Math.floor(Math.random() * IMG_NUMBER, 0);
}

function init() {
  const randomNumber = genRandom() + 1;
  paintImage(randomNumber);
}

init();
