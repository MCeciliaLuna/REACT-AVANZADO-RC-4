import { useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { authReducer } from "../reducers/AuthReducer";
import { axiosDash } from "../config/dashAxios";

const initialValues = {
  user: {},
  isLogged: false,
  token: "",
  message: "NO TE HAS LOGUEADO AUN",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  const login = async (username, password) => {
    const { data } = await axiosDash.post("/auth/login", {
      username: username,
      password: password,
    });
    console.log(data);

    dispatch({
      type: "LOGIN",
      payload: {
        user: {
          id: data.id,
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          gender: data.gender,
        },
        isLogged: true,
        token: data.token,
        message: "Usuario LOGUEADO con éxito.",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        message: "Usuario DESLOGUEADO con éxito.",
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
