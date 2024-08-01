import { Link } from "react-router-dom"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import "./style.css"
const SignIn = () => {
  return (
    <div className="sign-in__container">
      <div className="sign-in">
        <h3>Sign In</h3>
        <div className="sign-in__row">
          <label className="sign-in__label">Email Address</label>
          <Input
            placeholder={"Enter email address"}
            name={"username"}
            value={""}
            onChange={function (e: any): void {
              throw new Error("Function not implemented.")
            }}
          />
        </div>
        <div className="sign-in__row">
          <label className="sign-in__label">Password</label>
          <Input
            placeholder={"Enter password"}
            name={"username"}
            value={""}
            onChange={function (e: any): void {
              throw new Error("Function not implemented.")
            }}
          />
        </div>
        <div className="sign-in__row sign-in__row-button">
          <Button
            name={"Sign In"}
            onClick={function (): void {
              throw new Error("Function not implemented.")
            }}
            buttonType={"primary"}
            width="100%"
          />
        </div>
        <div className="sign-in__links">
          <Link to={"/forgot-password"}>Forgot Password</Link>
          <Link to={"/sign-up"}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
