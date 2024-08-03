import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ({children}: {children: ReactNode}) => {
  return <div>{children}</div>
}

export default ProtectedRoutes;
