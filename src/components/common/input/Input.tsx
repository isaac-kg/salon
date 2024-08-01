import { FC } from "react"
import "./style.css"

interface InputProps {
  type?: string
  placeholder: string
  name: string
  value: string
  onChange: (e: any) => void
}

const Input: FC<InputProps> = ({ placeholder, type = "text", name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
