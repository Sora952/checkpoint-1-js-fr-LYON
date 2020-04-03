// Je "cache" le verre vide grâce à un display none
emptyWhisky = document.querySelector('.emptyWhisky');
emptyWhisky.style.display = 'none';

window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  whiskyGlass = document.querySelector('.whisky');

  // Grâce au gestionnaire d'évènement click, je fais disparaître le verre de whisky lors du clic.
  whiskyGlass.addEventListener("click", function(element) {
    whiskyGlass.style.display = 'none';
   
  // Toujours au sein du gestionnaire d'event, je fais apparaître le verre, caché au préalable.
    emptyWhisky = document.querySelector('.emptyWhisky');
    emptyWhisky.style.display = 'block';
});
});