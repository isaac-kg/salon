import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import "./style.css"
import { Form, Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import FormErrorMessage from "../../components/common/formError"
import {auth} from "../../firebase-config"
import {
  signInWithEmailAndPassword,
} from "firebase/auth"
import { useAppDispatch } from "../../hooks"
import { addUidAndEmail } from "../../store/user.actions"
import { useState } from "react"

interface SignInFormValues {
  emailAddress: string
  password: string
}

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string>("")

  const dispatch = useAppDispatch();
  const from = (location.state as any)?.from?.pathname || "/";
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
    signInWithEmailAndPassword(auth, values.emailAddress, values.password)
      .then((userCredentail) => {
        dispatch(addUidAndEmail({uid: userCredentail.user.uid, email: userCredentail.user.email}))
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Internal server error") //TODO might have to look for more error codes
        if(error.code === "auth/invalid-credential"){
          setError("Invalid email or password")
        }
      })
      .finally(() => {
        action.setSubmitting(false)
      })
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
              {error && (
                <div style={{ color: "#D2042D", textAlign: "center" }}>
                  <small>*{error}</small>
                </div>
              )}
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
                  type="password"
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
