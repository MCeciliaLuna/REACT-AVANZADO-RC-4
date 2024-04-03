import { useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { authReducer } from "../reducers/AuthReducer";
import { axiosDash } from "../config/dashAxios";
import { types } from "../types/types";

const initialValues = {
  user: {},
  isLogged: false,
  token: "",
  message: "NO TE HAS LOGUEADO AUN",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  const login = async (email, password) => {
    const { data } = await axiosDash.post("/login", {
      email,
      password,
    });
    console.log(data);

    const dataLocal = {
      user: {
        id: data._id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      },
      token: data.token,
    };

    localStorage.setItem("localData", JSON.stringify(dataLocal));

    dispatch({
      type: types.auth.login,
      payload: {
        user: {
          id: data._id,
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        },
        isLogged: true,
        token: data.token,
        message: "Usuario LOGUEADO con éxito.",
      },
    });
  };

  const checkToken = async () => {
    const token = localStorage.getItem("localData");
    const dataToken = JSON.parse(token);

    if (token) {
      dispatch({
        type: types.auth.login,
        payload: {
          user: {
            id: dataToken._id,
            username: dataToken.username,
            firstName: dataToken.firstName,
            lastName: dataToken.lastName,
            email: dataToken.email,
          },
          isLogged: true,
          token: dataToken.user.token,
        },
      });
    }
  };

  const logout = () => {
    dispatch({
      type: types.auth.logout,
      payload: {
        message: "Usuario DESLOGUEADO con éxito.",
      },
    });
    localStorage.clear("localData");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        checkToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
