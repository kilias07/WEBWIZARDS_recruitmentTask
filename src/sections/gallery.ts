import slider_1 from "/slider/slider_1.webp";
import slider_2 from "/slider/slider_2.webp";
import slider_3 from "/slider/slider_3.webp";
import slider_4 from "/slider/slider_4.webp";

import Swiper from "swiper";
import { domReady } from "../helper";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

const gallery = document.createElement("section");
gallery.classList.add("gallery");
gallery.id = "galeria";

gallery.innerHTML = /* html */ `
<h2 class="section-title">Galeria</h2>
<div class="swiper">
  <div class="swiper-wrapper">
    <img class="swiper-slide" src="${slider_1}"/>
    <img class="swiper-slide" src="${slider_2}"/>
    <img class="swiper-slide" src="${slider_3}"/>
    <img class="swiper-slide" src="${slider_4}"/>
  </div>
  <div class="swiper-pagination"></div>

  <svg role="button" class="swiper-indicator-left" xmlns="http://www.w3.org/2000/svg" width="28.2" height="48" viewBox="0 0 28.2 48">
    <path id="arrow-left" d="M128.912,22.127,107.551.767a2.631,2.631,0,0,0-3.714,0l-1.573,1.573a2.629,2.629,0,0,0,0,3.714L120.2,23.99,102.245,41.947a2.632,2.632,0,0,0,0,3.714l1.573,1.572a2.631,2.631,0,0,0,3.714,0l21.381-21.38a2.65,2.65,0,0,0,0-3.726Z" transform="translate(129.678 48) rotate(180)"/>
  </svg>
  <svg role="button" class="swiper-indicator-right" xmlns="http://www.w3.org/2000/svg" width="28.2" height="48" viewBox="0 0 28.2 48">
  <path id="arrow-left" d="M128.912,22.127,107.551.767a2.631,2.631,0,0,0-3.714,0l-1.573,1.573a2.629,2.629,0,0,0,0,3.714L120.2,23.99,102.245,41.947a2.632,2.632,0,0,0,0,3.714l1.573,1.572a2.631,2.631,0,0,0,3.714,0l21.381-21.38a2.65,2.65,0,0,0,0-3.726Z" transform="translate(129.678 48) rotate(180)"/>
  </svg>
  <div class="swiper-scrollbar"></div>
</div>
`;

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 50,
  keyboard: true,
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-indicator-right",
    prevEl: ".swiper-indicator-left",
    disabledClass: "swiper-indicator-disabled",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  modules: [Navigation, Pagination],
};

(async function toggleNav() {
  await domReady;
  const swiper = new Swiper(".swiper", swiperParams);
  swiper.on("slideChange", () => {
    const { isBeginning, isEnd } = swiper;
    const leftIndicator = document.querySelector<HTMLElement>(
      ".swiper-indicator-left"
    )!;
    const rightIndicator = document.querySelector<HTMLElement>(
      ".swiper-indicator-right"
    )!;
    if (isBeginning) {
      leftIndicator.classList.add("swiper-indicator-disabled");
    } else {
      leftIndicator.classList.remove("swiper-indicator-disabled");
    }
    if (isEnd) {
      rightIndicator.classList.add("swiper-indicator-disabled");
    } else {
      rightIndicator.classList.remove("swiper-indicator-disabled");
    }
  });
})();

export default gallery;
