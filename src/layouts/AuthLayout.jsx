import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";

export const AuthLayout = () => {

  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
    </Routes>
  );
};
