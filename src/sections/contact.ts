import { log } from "console";
import { domReady } from "../helper";

const form = document.createElement("div");
form.classList.add("contact__form");
form.innerHTML = /* html */ `
<div class="contact__backdrop"></div>
<div class="contact__form__container">
    <svg class="contact__close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path id="close" d="M15.96,12l7.425-7.425a2.1,2.1,0,0,0,0-2.969l-.99-.99a2.1,2.1,0,0,0-2.97,0L12,8.041,4.576.615a2.1,2.1,0,0,0-2.969,0l-.991.99a2.1,2.1,0,0,0,0,2.97L8.041,12,.617,19.425a2.1,2.1,0,0,0,0,2.97l.99.99a2.1,2.1,0,0,0,2.969,0L12,15.96l7.424,7.425a2.1,2.1,0,0,0,2.97,0l.99-.99a2.1,2.1,0,0,0,0-2.97Zm0,0"/>
    </svg>
    <form>
    <label for="name">Imię<span>*</span>
    <input type="text" id="name" name="name" required placeholder="- wpisz -">
    </label>


    <label for="surname">Nazwisko<span>*</span>
    <input type="text" id="surname" name="surname" required placeholder="- wpisz -">
    </label>

    <label for="email">Email<span>*</span>
      <input type="email" id="email" name="email" required placeholder="- wpisz- ">
    </label>

    <p><span>*</span> - pola wymagane</p>
    <div class="form__checkbox">
    <input type="checkbox" id="accept" name="accept" required>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <button type="submit">Wyślij</button>
    <p class="form__error">Proszę wypełnić wymagane pola!</p>
    </form>
  `;

(async function toggleContact() {
  await domReady;
  const contact = document.querySelector<HTMLButtonElement>("#kontakt")!;
  const app = document.querySelector<HTMLElement>("#app")!;
  const backdrop = document.querySelector<HTMLElement>(".contact__backdrop")!;
  const closeForm = document.querySelector<SVGElement>(".contact__close")!;
  const formError = document.querySelector<HTMLElement>(".form__error")!;
  const inputs = form.querySelectorAll<HTMLInputElement>("input");

  function preventScroll(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function enableScroll() {
    app.removeEventListener("wheel", preventScroll);
  }

  contact.addEventListener("click", () => {
    app.appendChild(form);
    app.addEventListener("wheel", preventScroll, { passive: false });
    form.style.display = "block";
  });

  backdrop.addEventListener("click", () => {
    enableScroll();
    form.style.display = "none";
  });
  closeForm.addEventListener("click", () => {
    enableScroll();
    form.style.display = "none";
  });

  form.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    inputs.forEach((input) => {
      if (!input.value) {
        formError.style.display = "block";
      } else {
        const formData = {
          name: inputs[0].value,
          surname: inputs[1].value,
          email: inputs[2].value,
          accecpt: inputs[3].checked,
        };
        console.log(formData);

        inputs.forEach((input) => (input.value = ""));
        inputs[3].checked = false;
        formError.style.display = "none";
        form.style.display = "none";
        enableScroll();
      }
    });
  });
})();

export default form;
