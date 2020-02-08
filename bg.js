const body = document.querySelector('body');

const USS_API_KEY =
  '888aa17ed9a70f756ec6455a367c47d815edecc958d6f34f0c0d93f9fabf78e8';

const URL = `https://api.unsplash.com/photos/random?client_id=${USS_API_KEY}&query=ocean`;

function getImage() {
  fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(json => {
      const image = json.urls.full;
      paintImage(image);
    });
}

function paintImage(imageURL) {
  const image = new Image();
  image.src = imageURL;
  image.classList.add('bgImage');
  if (image.offsetWidth / image.offsetHeight < 1.33) {
    image.classList.add('bigHeight');
  } else {
    image.classList.add('bigWidth');
  }
  body.prepend(image);
}

function init() {
  getImage();
}

init();
