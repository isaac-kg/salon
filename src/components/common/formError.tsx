import { ErrorMessage } from "formik"

const FormErrorMessage = ({ name }: { name: string }) => {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <small style={{ color: "#D2042D" }}>*{msg}</small>}
    />
  )
}

export default FormErrorMessage
