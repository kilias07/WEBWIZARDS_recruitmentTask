import heroImage from "/hero_image/hero_image.webp";
import heroImageNarrow from "/hero_image/hero_image_narrow.webp";

const hero = document.createElement("section");
hero.classList.add("hero__section");
hero.id = "start";

//This breakpoint is based on varaible $small-screen in src/ui/styles/_variables.scss
const smallScreen = "(max-width: 768px)";

hero.innerHTML = /* html */ `
    <picture>
      <source media="${smallScreen}" srcset="${heroImageNarrow}" type="image/webp">
      <img src="${heroImage}" alt="photo of man with camera"/>
    </picture>
`;

export default hero;
