window.addEventListener("load", () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  const handleWhisky = () => {
    const glass = document.querySelector("#glass");
    console.log(glass);
    glass.addEventListener("click", () => {
      if (glass.getAttribute("src") === "/site/image/whisky.png") {
        glass.setAttribute("src", "/site/image/empty_whisky.png");
      } else {
        glass.setAttribute("src", "/site/image/whisky.png");
      }
    });
  };
  handleWhisky();
});
