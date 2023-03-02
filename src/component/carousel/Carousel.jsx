import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

const Carousel = () => {
  return (
    <div>
      <Splide
        // hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          width: 1800,
          gap: "1rem",
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
        }}
      >
        <SplideSlide>
          <img
            src="https://lh3.googleusercontent.com/tJC368oMZ4oC3yUnBH2mYuFnp48hk9kpYRjZO2VPuM7x59pypQThG7MyI04A7-lYehTcloxHFkyAVSsxYW6E4A-lj1wJwFFR7cMTfw=w1440-rj-v1"
            alt="Im"
            className="slide-img"
          />
          <div className="content-wrapper">
            <div className="content-wrapper__slide-content">
              <h1>Hi, I'm Simone</h1>
              <p>
                Whatever I can do to help in the fight to find cures for
                diseases, I'm there.
              </p>
            </div>
            <div className="content-wrapper__slide-btn">
              <button>Watch simons story</button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://lh3.googleusercontent.com/BJ4WonM2azARY9gJr6A1dokqSOhasqNejacOF7QEFFEewT5mwCXMrAiuvA-TT8iwza0DQfRSSm7YW1sySIPe5JWriFyu9mxMe9XXug=w1440-rw-v1"
            alt="Im2"
            className="slide-img"
          />
          <div className="content-wrapper">
            <div className="content-wrapper__slide-content">
              <h1>Hi, I'm Lynnette</h1>
              <p>
              Project Baseline attracted me because it is open to so many different people and it studies so many things.
              </p>
            </div>
            <div className="content-wrapper__slide-btn">
              <button>Watch Lynnette's story</button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://lh3.googleusercontent.com/BJ4WonM2azARY9gJr6A1dokqSOhasqNejacOF7QEFFEewT5mwCXMrAiuvA-TT8iwza0DQfRSSm7YW1sySIPe5JWriFyu9mxMe9XXug=w1440-rw-v1"
            alt="Im2"
            className="slide-img"
          />
          <div className="content-wrapper">
            <div className="content-wrapper__slide-content">
              <h1>Hi, I'm Carl</h1>
              <p>
              With other studies, I was never really a part of them, I was just a specimen. But with Baseline, it's more than that. It's like a family.
              </p>
            </div>
            <div className="content-wrapper__slide-btn">
              <button>Watch Carl's story</button>
            </div>
          </div>
        </SplideSlide>

        {/* <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button class="splide__toggle" type="button">
          <span class="splide__toggle__play">Play</span>
          <span class="splide__toggle__pause">Pause</span>
        </button> */}
      </Splide>
    </div>
  );
};

export default Carousel;
