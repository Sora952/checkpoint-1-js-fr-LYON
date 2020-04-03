window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  const whiskyElt = document.querySelector('.whisky');

  whiskyElt.addEventListener('click', (e) => {
    whiskyElt.setAttribute('src', 'image/empty_whisky.png')
  });
});
