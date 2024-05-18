import { FC, useEffect, useRef } from "react"
import Button from "../../components/common/Button"
import "./style.css"

interface BookingProps {
  canScroll: number
}

const Booking: FC<BookingProps> = ({ canScroll }) => {
  const ref = useRef(null)

  useEffect(() => {
    console.log("Can scroll ", canScroll)
    if (canScroll > 1) {
      ref.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [canScroll])

  return (
    <div ref={ref} className="booking">
      <img src="../../assets/cosmetics.jpg" className="booking__image" />

      <div className="booking__card">
        <div className="booking__title">BOOK TIME TO GET MANICURE</div>
        <div className="booking__description">
          Step into a Sanctuary of Beauty: Book an appointment with our skilled
          artisans, and let our personalized services unveil your true beauty
          potential.
        </div>
        <div>
          <Button
            name={"Booking"}
            width=""
            onClick={function (): void {
              throw new Error("Function not implemented.")
            }}
            buttonType={"primary"}
            disabled={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Booking
