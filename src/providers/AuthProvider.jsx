import { useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { authReducer } from "../reducers/AuthReducer";

const initialValues = {
  user: {},
  isLogged: false,
  token: "",
  message: "NO TE HAS LOGUEADO AUN",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  const login = (username, password) => {
    if (username === "mcecilialuna" && password === "1234Cecilia!") {
      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            name: "Cecilia",
            lastname: "Luna",
            age: 26,
          },
          isLogged: true,
          token: "1234Cecilia!",
          message: "Usuario LOGUEADO con éxito.",
        },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
