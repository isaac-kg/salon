import { FC } from "react"
import "./style.css"

interface ButtonProps {
  name: string
  onClick?: () => void
  width?: string
  buttonType: "primary" | "secondary"
  disabled?: boolean
  type?: "button" | "reset" | "submit"
}

const Button: FC<ButtonProps> = ({
  name,
  width,
  onClick,
  buttonType,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`${buttonType === "primary" ? "" : "btn-secondary"}`}
      style={{ width }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {name}
    </button>
  )
}

export default Button
