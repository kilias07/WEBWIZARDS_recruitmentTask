import "./sass/main.scss";

import nav from "./sections/nav";
import hero from "./sections/hero";
import about from "./sections/about";
import gallery from "./sections/gallery";
import footer from "./sections/footer";
import form from "./sections/contact";

//initailize each sections
document
  .querySelector<HTMLElement>("#app")!
  .append(form, nav, hero, about, gallery, footer);
