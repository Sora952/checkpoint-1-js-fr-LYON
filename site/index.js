const img = document.getElementById('whisky');

function changeImg () {
  if (img.src !== './image/empty_whisky.png') {
    img.src = './image/empty_whisky.png';
  } else {
    img.src = './image/whisky.png';
  }
}
img.addEventListener ('click', changeImg(), true);
