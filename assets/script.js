const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let divArrowLeft = document.querySelector(".arrow_left");
console.log(divArrowLeft);

let divArrowRight = document.querySelector(".arrow_right");
console.log(divArrowRight);

let listeDots = document.querySelectorAll(".dots .dot");
console.log(listeDots);

let bannerImmage = document.querySelector(".banner-img");

let bannerTitle = document.querySelector("#banner p");
console.log(bannerTitle, "bannerTitle");

let currentIndex = 0;

divArrowRight.addEventListener("click", () => {
  listeDots[currentIndex].classList.remove("dot_selected");
  currentIndex++;

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }

  listeDots[currentIndex].classList.add("dot_selected");
  bannerImmage.src = slides[currentIndex].image;
  bannerTitle.innerHTML = slides[currentIndex].tagLine;
});

divArrowLeft.addEventListener("click", () => {
  listeDots[currentIndex].classList.remove("dot_selected");
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  listeDots[currentIndex].classList.add("dot_selected");
  bannerImmage.src = slides[currentIndex].image;
  bannerTitle.innerHTML = slides[currentIndex].tagLine;
});
