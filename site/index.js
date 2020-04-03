window.addEventListener('load', () => {
  const img = document.getElementById('whisky');

  img.addEventListener('click', () => {
    img.src = 'image/empty_whisky.png';
  });
});
