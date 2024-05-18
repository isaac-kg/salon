import { FC } from "react"

interface ButtonProps {
  name: string;
  onClick: () => void;
  width?: string;
  buttonType: "primary" | "secondary"
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ name, width, onClick, buttonType, disabled = false }) => {
  return (
    <button
      className={`${buttonType === "primary" ? "" : "btn-secondary"}`}
      style={{ width }}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button
