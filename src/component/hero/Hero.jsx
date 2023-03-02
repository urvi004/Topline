import React from "react";

const Hero = ({heading,description,height,id}) => {
  return (
    <>
      <div className="hero" style={{height:height}} id={id} >
        <div className="hero__head">
        <div className="hero__head__content">
          <h1>
           {heading}
          </h1>
          <h2>{description}</h2>
        </div>
        <div className="hero__head__btn">
          <button>Join us</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
