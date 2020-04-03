const glass = document.getElementById('whisky');

glass.addEventListener('click', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  if (glass.src.endsWith('/image/whisky.png')) {
    glass.src = './image/empty_whisky.png';
  } else {
    glass.src = './image/whisky.png';
  }
});
