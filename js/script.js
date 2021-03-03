function clock() {
  let date = new Date(),
    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  document.querySelector(".clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);

const slider = document.querySelectorAll("#slider .slide");
const dots = document.querySelectorAll("#dots .dot");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentSlide = 0;
let currentDot = 0;

// const slideInterval = setInterval(
//   prevSlide,
//   5000
// );

function nextSlide() {
  slider[currentSlide].className = "slide";
  dots[currentDot].className = "dot";
  currentSlide = (currentSlide + 1) % slider.length;
  currentDot = (currentDot + 1) % dots.length;
  slider[currentSlide].className = "slide demonstration";
  dots[currentDot].className = "dot active-dot";
}

function prevSlide() {
  slider[currentSlide].className = "slide";
  dots[currentDot].className = "dot";

  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
    currentDot = dots.length - 1;
  } else {
    currentSlide = currentSlide - 1;
    currentDot = currentDot - 1;
  }

  slider[currentSlide].className = "slide demonstration";
  dots[currentDot].className = "dot active-dot";
}

nextBtn.addEventListener("click", (evt) => {
  console.log("next");
  nextSlide();
});

prevBtn.addEventListener("click", (evt) => {
  console.log("prev");
  prevSlide();
});
