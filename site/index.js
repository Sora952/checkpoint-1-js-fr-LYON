window.addEventListener('load', () => {
  function toggleImage() {
    var img1 = "image/whisky.png";
    var img2 = "image/empty_whisky.png";
    
    var imgElement = document.getElementById('toggleImage');
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;
 }
});
