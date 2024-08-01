import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import "./style.css"
const SignUp = () => {
  return (
    <div className="sign-up">
      <h3>Sign Up</h3>
      <div className="sign-up__row">
        <label className="sign-up__label">Firstname</label>
        <Input
          placeholder={"Enter username"}
          name={"username"}
          value={""}
          onChange={function (e: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </div>
      <div className="sign-up__row">
        <label className="sign-up__label">Lastname</label>
        <Input
          placeholder={"Enter username"}
          name={"username"}
          value={""}
          onChange={function (e: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </div>
      <div className="sign-up__row">
        <label className="sign-up__label">Email Address</label>
        <Input
          placeholder={"Enter username"}
          name={"username"}
          value={""}
          onChange={function (e: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </div>
      <div className="sign-up__row">
        <label className="sign-up__label">Phone Numbers</label>
        <Input
          placeholder={"Enter username"}
          name={"username"}
          value={""}
          onChange={function (e: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </div>
      <div className="sign-up__row">
        <label className="sign-up__label">Password</label>
        <Input
          placeholder={"Enter password"}
          name={"username"}
          value={""}
          onChange={function (e: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </div>
      <div className="sign-up__row">
        <label className="sign-up__label">Confirm Password</label>
        <Input
          placeholder={"Enter password"}
          name={"username"}
          value={""}
          onChange={function (e: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </div>
      <div className="sign-up__row sign-up__row-button">
        <Button
          name={"Sign Up"}
          onClick={function (): void {
            throw new Error("Function not implemented.")
          }}
          buttonType={"primary"}
          width="100%"
        />
      </div>
    </div>
  )
}

export default SignUp
