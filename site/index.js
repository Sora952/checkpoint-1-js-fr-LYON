window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  const fullWhiskyGlass = document.querySelector('.whisky');
  console.log(fullWhiskyGlass);

  function showEmptyGlass() {

    console.log(fullWhiskyGlass)

    fullWhiskyGlass.outerHTML = `
      
        <img src="image/empty_whisky.png" alt="a whisky glass" class="whisky" />
      
    `
  }
  fullWhiskyGlass.addEventListener('click', showEmptyGlass)

});
