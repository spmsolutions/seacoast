import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselStyles.css";

const NewHomesCarousel = () => {
  return (
    <Carousel>
      <div>
        <img
          src="img/portfolio/new-homes/woodbury-ct-home.jpg"
          alt="Woodbury, CT custom home"
        />
        <h3 className="legend">Custom Home - Woodbury, CT</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/grey-house.jpg"
          alt="grey custom home"
        />
        <h3 className="legend">Custom Home</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/blue-house.jpg"
          alt="blue custom home"
        />
        <h3 className="legend">Custom Home</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/custom_homes_needham.jpg"
          alt="Needham, MA Custom home"
        />
        <h3 className="legend">Custom Home - Needham, MA</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/three-story-house.jpg"
          alt="Three story house"
        />
        <h3 className="legend">Custom Home - 3 stories</h3>
      </div>

      <div>
        <img
          src="img/portfolio/new-homes/custom_homes_wayland.jpg"
          alt="Wayland, MA Custom home"
        />
        <h3 className="legend">Custom Home - Wayland, MA</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/single-family-home.jpg"
          alt="Single family home"
        />
        <h3 className="legend">Custom Home - Single Family</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/attic.jpg"
          alt="Custom home with attic"
        />
        <h3 className="legend">Custom Home - With Attic</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/brick-house.jpg"
          alt="Custom home with brick wall"
        />
        <h3 className="legend">Custom Home - Brick Wall</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/two-story-house.jpg"
          alt="two story house"
        />
        <h3 className="legend">Custom Home - 2 stories</h3>
      </div>
      <div>
        <img
          src="img/portfolio/new-homes/grey-mansion.jpg"
          alt="Custom grey mansion"
        />
        <h3 className="legend">Custom Home - Mansion</h3>
      </div>
    </Carousel>
  );
};

export default NewHomesCarousel;
