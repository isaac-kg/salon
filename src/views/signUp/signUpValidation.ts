import * as Yup from "yup"

const phoneNumberRegex = /^(\+?27|0)[6-8][0-9]{8}$/
const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

const signUpValidationSchema = Yup.object({
  firstname: Yup.string().required("firstname is required"),
  lastname: Yup.string().required("lastname is required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, "Phone number is not valid")
    .required("Phone number is required"),
  password: Yup.string() .required("Password is required")
  .min(8, "Password must be at least 8 characters long")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(passwordRegex, "Password must contain at least one special character"),
  passwordConfirmation: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
})

export default signUpValidationSchema