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

    const dataLocal = {
      user: {
        token: data.token,
        id: data.id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        gender: data.gender,
      },
    };

    localStorage.setItem("localData", JSON.stringify(dataLocal));

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

  const checkToken = async () => {
    const token = localStorage.getItem("localData");
    const dataToken = JSON.parse(token);

    if (token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            id: dataToken.id,
            username: dataToken.user.username,
            firstName: dataToken.user.firstName,
            lastName: dataToken.user.lastName,
            email: dataToken.user.email,
            gender: dataToken.user.gender,
          },
          isLogged: true,
          token: dataToken.user.token,
        },
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
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
