import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselStyles.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const NewHomesCarousel = () => {
  return (
    <Carousel>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/woodbury-ct-home.png")}
          alt="Woodbury, CT custom home"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/grey-house.png")}
          alt="grey custom home"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/blue-house.png")}
          alt="blue custom home"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/custom_homes_needham.png")}
          alt="Needham, MA Custom home"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/single-family-home.png")}
          alt="Single family home"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/attic.png")}
          alt="Custom home with attic"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/two-story-house.png")}
          alt="two story house"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/grey-mansion.png")}
          alt="Custom grey mansion"
        />
      </div>
    </Carousel>
  );
};

export default NewHomesCarousel;
