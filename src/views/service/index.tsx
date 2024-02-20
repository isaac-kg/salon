import React from "react";
import "./style.css"

interface ServiceProps {
  image: string;
  serviceName: string;
  description: string;
}

const Service = ({image, serviceName, description}: ServiceProps) => {
  
  const services = [1, 3, 52, 25, 2]

  const tutorials = [
    {
    name: "Perfume",
    description: "Unraveling the nuances of scent layering for a personalized olfactory masterpiece.",
    image: "../../assets/icons/lips copy 3.svg"
  },{
    name: "Eye lash",
    description: "Unveiling the secrets to luscious lashes that mesmerize with every blink.",
    image: "../../assets/icons/lips copy 4.svg"
  },{

    name: "Makeup",
    description: "Guiding beauty enthusiasts step by step toward their personalized artistry",
    image: "../../assets/icons/lips copy.svg"
  },{
    name: "Lipstick",
    description: "The colorful roadmap to achieving the perfect pout for any occasion.",
    image: "../../assets/icons/lips.svg"
  }

  ]
  
  const images = [
    "../../assets/icons/perfume.svg", 
    "../../assets/icons/lips copy 3.svg", 
    "../../assets/icons/lips copy 4.svg", 
    "../../assets/icons/lips copy.svg",
    "../../assets/icons/lips.svg"
  ]
  return (
    <React.Fragment>
      <h3 className="service-header">Some Of Our Tutorial</h3>
      <p className="service-para">
      This tutorials are like guides that teach you how to do your hair, makeup, and skincare to look amazing. 
      They're like your own personal beauty coach, showing step-by-step ways to bring out your best
      </p>
      <div className="service-container">
        {
          tutorials.map((tutorial: any, n: number) => 
          <div className="service" key={n}>
            <img className="service__image" src={tutorial.image} />
            <p className="service__title">{tutorial.name}</p>
            <p className="service__info">
              {tutorial.description}
            </p>
          </div>
          )
        }
        
      </div>
    </React.Fragment>
  )
}

export default Service;