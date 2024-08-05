import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "./hooks";
import SignIn from "./views/signIn";

const ProtectedRoutes = () => {

  const { uidAndEmail } = useAppSelector((state) => state.user)
  console.log("uidAndEmail", uidAndEmail)
  return <div>{uidAndEmail ? <Outlet/> : <Navigate to={"/sign-in"} />}</div>
}

export default ProtectedRoutes;
