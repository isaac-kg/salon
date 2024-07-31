import { FC } from "react"
import "./style.css"

interface InputProps {
  type: string
  label: string
  name: string
  value: string
  onChange: (e: any) => void
}

const Input: FC<InputProps> = ({ label, type, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={label}
      onChange={onChange}
    />
  )
}

export default Input
