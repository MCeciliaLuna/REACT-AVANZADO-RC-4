import { useContext, useEffect } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { GeneralLayout } from "../layouts/GeneralLayout";
import { AuthContext } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

function AppRoutes() {
  const { state, checkToken } = useContext(AuthContext);
  const isLogged = state.isLogged;
  
  useEffect(() => {
    checkToken()
  }, [])
  

  console.log("¿Estás logueado?", state.message);
  return (
    <>
      <Routes>
        <Route
          path="/auth/login/*"
          element={
            <PublicRoutes isLogged={isLogged}>
              <AuthLayout />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isLogged={isLogged}>
              <GeneralLayout />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
