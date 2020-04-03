window.addEventListener('load', () => {
    const img2 = "image/empty_whisky.png";
    
    let imgElement = document.getElementById('whisky-switch');
    imgElement.addEventListener('click', function() {
      console.log(imgElement.src);
      imgElement.src = img2
      
    });
});
