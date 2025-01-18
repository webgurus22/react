import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Default to 1 slide on large screens
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay in ms
    arrows: true, // Show arrows for navigation

    // Responsive settings
    responsive: [
      {
        breakpoint: 1024, // For tablets and small screens
        settings: {
          slidesToShow: 2, // Show 2 slides at once on tablet and larger mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile phones
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller mobile screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small mobile screens (e.g., portrait phone)
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <picture>
            {/* For large screens, desktop or tablets */}
            <source
              media="(min-width: 1024px)"
              srcSet="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/54b578159b0db6ae.jpg"
            />
           
            {/* For small screens (mobile phones) */}
            <source
              media="(max-width: 767px)"
              srcSet="https://rukminim2.flixcart.com/fk-p-flap/480/300/image/90ac881bf4c81f47.jpeg"
            />
            {/* Default image in case no media queries match */}
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/54b578159b0db6ae.jpg"
              alt="Slide 1"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
        </div>
        <div>
          <picture>
            {/* For large screens, desktop or tablets */}
            <source
              media="(min-width: 1024px)"
              srcSet="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/abf1dbfce2cd6e44.jpg"
            />
            
            {/* For small screens (mobile phones) */}
            <source
              media="(max-width: 767px)"
              srcSet="https://rukminim2.flixcart.com/fk-p-flap/480/300/image/778a432b67edddb9.jpeg"
            />
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/abf1dbfce2cd6e44.jpg"
              alt="Slide 2"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
        </div>
        <div>
          <picture>
            {/* For large screens, desktop or tablets */}
            <source
              media="(min-width: 1024px)"
              srcSet="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1e5209f72f68798b.jpeg"
            />
           
            {/* For small screens (mobile phones) */}
            <source
              media="(max-width: 767px)"
              srcSet="https://rukminim2.flixcart.com/fk-p-flap/480/300/image/cb8b16426ce4e727.jpg"
            />
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1e5209f72f68798b.jpeg"
              alt="Slide 3"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
        </div>
      </Slider>
    </div>
  );
};

export default App;
