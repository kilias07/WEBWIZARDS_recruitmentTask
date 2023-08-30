import { domReady } from "../helper";
import logoIpsum from "/LOGO_Placeholder.svg";

const navItems = [
  { name: "Start", href: "#" },
  { name: "O mnie", href: "#omnie" },
  { name: "Galeria", href: "#galeria" },
] as const;

const socialItems = [
  { name: "facebook", href: "https://www.facebook.com/" },
  { name: "instagram", href: "https://www.instagram.com/" },
  { name: "youtube", href: "https://www.youtube.com/" },
] as const;

const nav = document.createElement("header");
nav.innerHTML = /*html*/ `
  <nav class="nav">
    <div class="nav__wrapper">
    <div class="nav__items">
      <a href="#"><img src="${logoIpsum}" alt="logo" class="nav__logo"></a>
      <div id="nav__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav__container">
      <ul class="nav__links">
      ${navItems
        .map(
          ({ href, name }) => /*html*/ `<li><a href="${href}">${name}</a></li>`
        )
        .join("")}
        <li><button id="kontakt">kontakt</button></li>
      </ul>
      <ul class="nav__social">
      ${socialItems
        .map(
          ({ href, name }) =>
            /*html*/ `<li><a href="${href}" target="_blank"><img alt="logo ${name}"  src="/${name}.svg"/></a></li>`
        )
        .join("")}
      </ul>


      </div>
    </div>
  </nav>
`;

(async function toggleNav() {
  await domReady;
  const hamburgerMenu =
    document.querySelector<HTMLDivElement>("#nav__hamburger")!;
  const navContainer =
    document.querySelector<HTMLDivElement>(".nav__container")!;
  const navLinks =
    document.querySelectorAll<HTMLAnchorElement>(".nav__links a");
  const logo = document.querySelector<HTMLAnchorElement>(".nav__logo")!;

  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  navLinks[0].addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerMenu.classList.remove("open");
      navContainer.classList.remove("open");
    });
  });

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    navContainer.classList.toggle("open");
  });
})();
export default nav;
