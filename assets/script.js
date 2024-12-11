const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let divArrowLeft = document.querySelector(".arrow_left");
console.log(divArrowLeft);

let divArrowRight = document.querySelector(".arrow_right");
console.log(divArrowRight);

let listeDots = document.querySelectorAll(".dot");
console.log(listeDots);

for (let i = 0; i < listeDots.length; i++) {
  console.log(listeDots[i]);
}
