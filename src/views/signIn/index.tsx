import { Link } from "react-router-dom"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import "./style.css"
import { Form, Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import FormErrorMessage from "../../components/common/formError"

interface SignInFormValues {
  emailAddress: string;
  password: string
}

const SignIn = () => {
  const signInValidationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  })

  const submitting = (
    values: SignInFormValues,
    action: FormikHelpers<SignInFormValues>
  ) => {
    setTimeout(() => {
      console.log("This is the values:: ", values)
      action.setSubmitting(false)
    }, 4000)
  }

  return (
    <div className="sign-in__container">
      <div className="sign-in">
        <h3>Sign In</h3>
        <Formik
          initialValues={{
            emailAddress: "",
            password: "",
          }}
          validationSchema={signInValidationSchema}
          onSubmit={(values, action) => {
            submitting(values, action)
          }}
          >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              {/* TODO get an actuall error.*/}
              { isSubmitting && <div style={{ color: "#D2042D", textAlign: "center" }}><small>*Invalide user information</small></div>}
              <div className="sign-in__row">
                <label className="sign-in__label">Email Address</label>
                <Input
                  placeholder={"Enter email address"}
                  name={"emailAddress"}
                  value={values.emailAddress}
                  onChange={handleChange}
                />
                <FormErrorMessage name="emailAddress" />
              </div>
              <div className="sign-in__row">
                <label className="sign-in__label">Password</label>
                <Input
                  placeholder={"Enter password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleChange}
                />
                 <FormErrorMessage name="password" />
              </div>
              <div className="sign-in__row sign-in__row-button">
                <Button
                  name={isSubmitting ? "Submitting..." : "Sign In"}
                  buttonType={"primary"}
                  width="100%"
                  disabled={isSubmitting}
                  type="submit"
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className="sign-in__links">
          <Link to={"/forgot-password"}>Forgot Password</Link>
          <Link to={"/sign-up"}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
