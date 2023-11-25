import React from "react";
import "./about.css"
const About = () => {
  return (
    <div className="about">
      <div className="about__info">
        <div className="about__info-header">
        At Radiance Haven, we believe beauty is a journey—a fusion of self-care, expertise, and personalized attention.
        </div>
        <div className="about__info-text">

        Radiance Haven isn't just a salon—it's a gateway to an odyssey of beauty and self-discovery. Join us on this voyage where each treatment, each consultation, and every moment spent with us nurtures your innate beauty and brings forth the confident, radiant you.
        While mirrors reflect our external beauty, Radiance Haven aims to evoke the glow that emanates from within. We believe that true radiance springs from a sense of well-being, confidence, and inner harmony.
        </div>
        <div className="about__info-service">
          <div className="about__service">
            <span className="about__service-header">242</span>
            <span>Make up<br/> sold.</span>
          </div>
          <div className="about__service">
            <span className="about__service-header">182</span>
            <span>Lipsticks<br/> sold.</span>
          </div>
        </div>
      </div>
      
      <div className="about__images">
         <div className="about__images-one">
          <img className="image-one" src="src/assets/makeuplady.jpg" alt=""/>
         </div>
         <div className="about__images-two">
          <img className="image-two" src="src/assets/cosmetics.jpg" alt=""/>
         </div>
      </div>
    </div>
  )
}

export default About;