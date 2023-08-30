import aboutMeImage from "/aboutme_image/aboutme_image.webp";
import aboutMeImageMobile from "/aboutme_image/aboutme_image_mobile.webp";

const about = document.createElement("section");
about.classList.add("about");
about.id = "omnie";

about.innerHTML = /* html */ `
  <div class="about__container" >
    <img 
      src="${aboutMeImage}"
      srcset="${aboutMeImageMobile} 400w,  ${aboutMeImage}"
    />
    <div class="about__content">
      <h2>o mnie</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p> 
      <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
       </p>
       <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
      </p>
    </div>
  </div>
`;

export default about;
