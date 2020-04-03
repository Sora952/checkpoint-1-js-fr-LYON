function toggleImage() {
  const img1 = "image/whisky.png";
  const img2 = "image/empty_whisky.png";
  
  let imgElement = document.getElementsByClassName('whisky');

  imgElement.src = (imgElement.src === img1)? img2 : img1;
}
/* marche pas jsp pas pourquoi */