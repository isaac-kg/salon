import React from "react";
import "./style.css"

interface ServiceProps {
  image: string;
  serviceName: string;
  description: string;
}

const Service = ({image, serviceName, description}: ServiceProps) => {
  
  const services = [1, 3, 52, 25, 2]
  const images = [
    "src/assets/icons/perfume.svg", 
    "src/assets/icons/lips copy 3.svg", 
    "src/assets/icons/lips copy 4.svg", 
    "src/assets/icons/lips copy.svg",
    "src/assets/icons/lips.svg"
  ]
  return (
    <React.Fragment>
      <h3 className="service-header">Some Of Our Services</h3>
      <div className="service-container">
        {
          images.map((image: string, n: number) => 
          <div className="service">
            <img className="service__image" src={image} alt={image} />
            <p className="service__title">{serviceName}</p>
            <p className="service__info">
              {description}
            </p>
          </div>
          )
        }
        
      </div>
    </React.Fragment>
  )
}

export default Service;