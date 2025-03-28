import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselStyles.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const RenovationsCarousel = () => {
  return (
    <Carousel>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/white-kitchen-island.png")}
          alt="Renovations - Granite kitchen Island"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/additions/home_addition_office.png")}
          alt="Library or Study Room Custom Remodel"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/bathroom_renovations.png")}
          alt="Bathroom Renovations"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/new-homes/three-story-house.png")}
          alt="Three story house"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/blue-white-kitchen.png")}
          alt="Renovations - Blue white kitchen"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/renovations_living.png")}
          alt="Living Room Renovations"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/additions/storage.png")}
          alt="Additions - Cabinets/Storage"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/additions/brick-house.png")}
          alt="Custom home with brick wall"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/grey-kitchen.png")}
          alt="Renovations - Grey kitchen"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/kitchen-dining.png")}
          alt="Renovations - Kitchen and dining"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/white-kitchen.png")}
          alt="Renovations - White Granite kitchen Island"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/black-white-kitchen.png")}
          alt="Kitchen Renovations"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/custom_remodel_bath.png")}
          alt="Bathroom Custom Remodel"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/additions/firestone.png")}
          alt="Sea Coast Fireplace additions"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/white-bathroom.png")}
          alt="Renovations - White bathroom"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/living-room.png")}
          alt="Renovations - Living Room"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/white-grey-kitchen.png")}
          alt="Renovations - White and Grey Kitchen"
        />
      </div>
      <div>
        <img
          src={useBaseUrl(
            "img/portfolio/renovations/granite-kitchen-island.png",
          )}
          alt="Renovations - Granite kitchen Island"
        />
      </div>
      <div>
        <img
          src={useBaseUrl(
            "img/portfolio/renovations/custom_remodel_laundry.png",
          )}
          alt="Laundry Room Custom Remodel"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/grey-white-kitchen.png")}
          alt="kitchen renovations"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/additions/home_addition_porch.png")}
          alt="Custom porch remodel"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/additions/porch.png")}
          alt="Additions - Porch"
        />
      </div>
      <div>
        <img
          src={useBaseUrl("img/portfolio/renovations/wood-floor-kitchen.png")}
          alt="Hardwood floor kitchen remodel"
        />
      </div>
    </Carousel>
  );
};

export default RenovationsCarousel;
