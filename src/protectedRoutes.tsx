import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "./hooks";
import SignIn from "./views/signIn";
import { useLocation } from "react-router-dom";

const ProtectedRoutes = () => {

  const location = useLocation();

  const { uidAndEmail } = useAppSelector((state) => state.user)
  return <div>{uidAndEmail ? <Outlet/> : <Navigate to={"/sign-in"} state={{ from: location }} replace />}</div>
}

export default ProtectedRoutes;
