function clock() {
  var date = new Date(),
    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  document.querySelector(".clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);

var slider = document.querySelectorAll("#slider .slide");
var currentslide = 0;

var slideInterval = setInterval(
  nextSlide,
  5000
); /* Интервал между картинками */

function nextSlide() {
  slider[currentslide].className = "slide";
  currentslide = (currentslide + 1) % slider.length;
  slider[currentslide].className = "slide demonstration";
}
