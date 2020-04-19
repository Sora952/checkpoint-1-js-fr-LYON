window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  const imgWhisky = document.getElementById('whisky');
 
  imgWhisky.addEventListener('click',() =>{
    imgWhisky.src = 'image/empty_whisky.png'
  })

});

