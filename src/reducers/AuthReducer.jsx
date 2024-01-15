export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isLogged: action.payload.isLogged,
        token: action.payload.token,
        message: action.payload.msg,
      };

    case "LOGOUT":
      return {
        user: null,
        isLogged: false,
        token: "",
        message: action.payload.msg,
      };

    default:
      state;
  }
};
