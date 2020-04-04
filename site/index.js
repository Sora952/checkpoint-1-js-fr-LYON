const whiskyElt = document.querySelector('.whisky');
whiskyElt.addEventListener('click', (e) => {
  whiskyElt.setAttribute('src', 'image/empty_whisky.png');
});

// function changeImage (element) {
//   const firstImg = element.getElementById('whisky').item(0);
//   let newImg = firstImg.getAttribute('src');
//   if (newImg === 'image/whisky.png') {
//     newImg = ('image/empty_whisky.png');
//   } else {
//     newImg = ('image/whisky.png');
//     firstImg.setAttribute('src', newImg);	
//   }
// }

// console.log(changeImage);

