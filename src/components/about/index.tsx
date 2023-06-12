import React from "react";
import "./about.css"
const About = () => {
  return (
    <div className="about">
      <div className="about__info">
        <div className="about__info-header">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eum reprehenderit quia?
        </div>
        <div className="about__info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quaerat! Suscipit voluptatum,
           saepe eum sapiente dolore ut nesciunt rerum omnis repellat voluptatem?
        </div>
        <div className="about__info-service">
          <div className="about__service">
            <span className="about__service-header">242</span>
            <span>Lorem, ipsum<br/> dolor.</span>
          </div>
          <div className="about__service">
            <span className="about__service-header">182</span>
            <span>Lorem,<br/> ipsum.</span>
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