window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.

  const whiskyGlass = document.querySelector('.whisky');
  console.log(whiskyGlass);

  whiskyGlass.addEventListener('click', () => {
    whiskyGlass.src = 'image/empty_whisky.png';
  }
  );
});
