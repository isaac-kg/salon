import "./style.css"


interface ServiceProps {
  image: string;
  serviceName: string;
  description: string;
}

const Service = ({image, serviceName, description}: ServiceProps) => {
  
  const services = [1, 3, 52, 25, 2]
  return (
    <div className="service-container">
      {
        services.map((n: number) => 
        <div className="service">
        <img className="service__image" src={image} alt="" />
        <p className="service__title">{serviceName}</p>
        <p className="service__info">
          {description}
        </p>
      </div>
        )
      }
      
    </div>
  )
}

export default Service;