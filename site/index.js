const firstImg = document.getElementById('whisky');
let count = 0;

firstImg.addEventListener('click', () => {
  count += 1;
  const secondImg = <img src="image/empty_whisky.png" alt="an empty whisky glass" class="emptyWhisky" id="emptyWhisky" />;
  firstBtn.innerHTML = img;
});

//window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
//});

