import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselStyles.css";

const ServicesCarousel = () => {
  return (
    <Carousel>
      <div>
      <img
              src="/img/portfolio/custom_homes_needham.JPEG"
              alt="Custom home, Needham"
            />
        <h3 className="legend">Custom Homes</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/home_addition_porch.jpg"
              alt="Home addition porch"
            />
        <h3 className="legend">Home Additions</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/renovations_living.jpg"
              alt="Living room renovations"
            />
        <h3 className="legend">Home Renovations</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/custom_remodel_laundry.jpg"
              alt="Custom remodel laundry"
            />
        <h3 className="legend">Custom Remodels</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/home_addition_living.jpg"
              alt="Home addition porch"
            />
        <h3 className="legend">Home Additions</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/bathroom_renovations.jpg"
              alt="Bathroom renovations"
            />
        <h3 className="legend">Home Renovations</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/custom_remodel_bath.jpg"
              alt="Living room renovations"
            />
        <h3 className="legend">Custom Remodels</h3>
      </div>
      <div>
      <img
              src="/img/portfolio/custom_homes_wayland.jpg"s
              alt="Custom home, Wayland"
            />
        <h3 className="legend">Custom Homes</h3>
      </div>
    </Carousel>
  );
};

export default ServicesCarousel;
