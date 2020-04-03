window.addEventListener('click', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass. 
  if (document.getElementsByClassName('whisky').src === './image/whisky.png') {
    document.getElementsByClassName('whisky').src = './image/empty_whisky.png';
    console.log('empty_whisky');
  } else {
    document.getElementsByClassName('whisky').src = './image/whisky.png';
    console.log('whisky');
  }
});
