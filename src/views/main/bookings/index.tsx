import { FC, useEffect, useRef } from "react"
import "./style.css"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

interface BookingProps {
  canScroll: number
}

const Booking: FC<BookingProps> = ({ canScroll }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (canScroll > 1) {
      ref?.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [canScroll])

  return (
    <div ref={ref} className="booking">
      <div className="booking__image">
        <LazyLoadImage
          alt="This is alt"
          src="../../assets/cosmetics.jpg"
          placeholderSrc="../../assets/icons/shadow.svg"
          effect="blur"
          width="100%"
          height="450px"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="booking__card">
        <div className="booking__title">BOOK TIME TO GET MANICURE</div>
        <div className="booking__description">
          Step into a Sanctuary of Beauty: Book an appointment with our skilled
          artisans, and let our personalized services unveil your true beauty
          potential.
        </div>
        <div>
          Email:{" "}
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:booking@radianceheaven.com"
              e.preventDefault()
            }}
            style={{ color: "blue" }}
          >
            booking@radianceheaven.com
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Booking
