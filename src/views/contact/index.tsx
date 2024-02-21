import { useState } from "react"
import Input from "../../components/common/Input"
import "./style.css"
import Button from "../../components/common/Button"
const Contact = () => {
  const [contactEmail, setContactEmail] = useState<string>("")

  return (
    <div className="contact">
      <div className="contact__title">
        Subscribe to our
        <br /> newsletter
      </div>
      <div className="contact__email">
        <Input
          type="text"
          label="Enter your email"
          name="conactEmail"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </div>
      <Button
        name={"Subscribe"}
        onClick={function (): void {
          throw new Error("Function not implemented.")
        }}
        buttonType={"primary"}
      />
    </div>
  )
}

export default Contact
