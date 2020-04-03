
//window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
//});

const firstImg = document.getElementById('whisky');

firstImg.addEventListener('click', () => {
  firstImg.style.display = 'none';
  firstImg.innerHTML = <img src="image/empty_whisky.png" alt="an empty whisky glass" class="emptyWhisky" id="emptyWhisky" />;
});
