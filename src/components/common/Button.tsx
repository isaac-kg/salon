import { FC } from "react"

interface ButtonProps {
  name: string;
  onClick: () => void;
  width?: string;
  buttonType: "primary" | "secondary"
}

const Button: FC<ButtonProps> = ({ name, width, onClick, buttonType }) => {
  return (
    <button
      className={`${buttonType === "primary" ? "" : "btn-secondary"}`}
      style={{ width }}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
