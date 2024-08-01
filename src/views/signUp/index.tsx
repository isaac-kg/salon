import { Link } from "react-router-dom"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import "./style.css"
import { Form, Formik, FormikHelpers } from "formik"
import FormErrorMessage from "../../components/common/formError"
import signUpValidationSchema from "./signUpValidation"

interface SignUpFormValues {
  firstname: string
  lastname: string
  emailAddress: string
  phoneNumber: string
  password: string
  passwordConfirmation: string
}

const SignUp = () => {

  const submitting = (
    values: SignUpFormValues,
    action: FormikHelpers<SignUpFormValues>
  ) => {
    setTimeout(() => {
      console.log("This is the values:: ", values)
      action.setSubmitting(false)
    }, 4000)
  }

  return (
    <div className="sign-up">
      <h3>Sign Up</h3>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          emailAddress: "",
          phoneNumber: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, action) => {
          submitting(values, action)
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form>
            <div className="sign-up__row">
              <div>
                <label className="sign-up__label">Firstname</label>
                <Input
                  placeholder={"Enter firstname"}
                  name={"firstname"}
                  value={values.firstname}
                  onChange={handleChange}
                />
                <FormErrorMessage name="firstname" />
              </div>
              <div>
                <label className="sign-up__label">Lastname</label>
                <Input
                  placeholder={"Enter lastname"}
                  name={"lastname"}
                  value={values.lastname}
                  onChange={handleChange}
                />
                <FormErrorMessage name="lastname" />
              </div>
            </div>
            <div className="sign-up__row">
              <div>
                <label className="sign-up__label">Email Address</label>
                <Input
                  placeholder={"Enter email address"}
                  name={"emailAddress"}
                  value={values.emailAddress}
                  onChange={handleChange}
                />
                <FormErrorMessage name="emailAddress" />
              </div>
              <div>
                <label className="sign-up__label">Phone Numbers</label>
                <Input
                  placeholder={"Enter phone number"}
                  name={"phoneNumber"}
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <FormErrorMessage name="phoneNumber" />
              </div>
            </div>
            <div className="sign-up__row">
              <div>
                <label className="sign-up__label">Password</label>
                <Input
                  placeholder={"Enter password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                />
                <FormErrorMessage name="password" />
              </div>
              <div>
                <label className="sign-up__label">Confirm Password</label>
                <Input
                  placeholder={"Enter confirm password"}
                  name={"passwordConfirmation"}
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  type="password"
                />
                <FormErrorMessage name="passwordConfirmation" />
              </div>
            </div>
            <div className="sign-up__row sign-up__row-button">
              <Button
                name={isSubmitting ? "Submitting..." : "Sign Up"}
                buttonType={"primary"}
                width="100%"
                disabled={isSubmitting}
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>

      <div className="sign-up__link">
        Don't have an account <Link to={"/sign-in"}>Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp
