import { useContext } from "react";
import { AuthLayout } from "./layouts/AuthLayout";
import { GeneralLayout } from "./layouts/GeneralLayout";
import { AuthContext } from "./contexts/AuthContext";

function App() {

  const { state } = useContext(AuthContext)
console.log(state.isLogged)
  return (
    <>
      {!state?.isLogged && <AuthLayout />}
      {state?.isLogged && <GeneralLayout />}
    </>
  );
}

export default App;
