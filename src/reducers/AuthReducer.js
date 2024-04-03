import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.auth.login:
      return {
        ...state,
        user: action.payload.user,
        isLogged: action.payload.isLogged,
        token: action.payload.token,
        message: action.payload.message,
      };

    case types.auth.logout:
      return {
        user: null,
        isLogged: false,
        token: "",
        message: action.payload.message,
      };

    default:
      state;
  }
};
