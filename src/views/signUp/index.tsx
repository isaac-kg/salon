import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import "./style.css"
import { Form, Formik, FormikHelpers } from "formik"
import FormErrorMessage from "../../components/common/formError"
import signUpValidationSchema from "./signUpValidation"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from "../../hooks"
import { addUidAndEmail } from "../../store/user.actions"
import { useState } from "react"

interface SignUpFormValues {
  firstname: string
  lastname: string
  emailAddress: string
  phoneNumber: string
  password: string
  passwordConfirmation: string
}

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>("")

  const submitting = (
    values: SignUpFormValues,
    action: FormikHelpers<SignUpFormValues>
  ) => {
    createUserWithEmailAndPassword(auth, values.emailAddress, values.password)
      .then(async (response) => {
        const userid = response.user.uid

        try {
          await setDoc(doc(db, "users", userid), {
            firstname: values.firstname,
            lastname: values.lastname,
            emailAddress: values.emailAddress,
            phoneNumber: values.phoneNumber,
          })
          dispatch(addUidAndEmail({uid: response.user.uid, email: response.user.email}))
          navigate("/product")
        } catch (e) {
          console.error("Error adding document: ", e)
          setError("Internal server error")
        }
      })
      .catch((error) => {
        setError("Internal server error") //TODO might have to look for more error codes
        if(error.code === "auth/email-already-in-use"){
          setError("Email is already taken")
        }
      })
      .finally(() => {
        action.setSubmitting(false)
      })
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
            {error && (
                <div style={{ color: "#D2042D", textAlign: "center" }}>
                  <small>*{error}</small>
                </div>
              )}
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
