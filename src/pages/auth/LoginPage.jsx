import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormHelperText } from "@mui/material";
import styles from "../../../styles.module.css";
import { useReducer, useState } from "react";
import { authReducer } from "../../reducers/AuthReducer";

export const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const initialValues = {
    user: {},
    isLogged: false,
    token: "",
    message: "",
  };

  const [state, dispatch] = useReducer(authReducer, initialValues);

  const onChangeInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.username === "mcecilialuna" &&
      formData.password === "1234Cecilia!"
    ) {
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
          msg: "Usuario logueado con éxito.",
        },
      });
    }
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        msg: "Usuario DESLOGUEADO con éxito.",
      },
    });
  };

  return (
    <div className={styles.form}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="set mcecilialuna"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={onChangeInput}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="set 1234Cecilia!"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChangeInput}
        />

        <FormHelperText
          id="component-helper-text"
          sx={{ color: "red" }}
        ></FormHelperText>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          INGRESAR
        </Button>
      </Box>
      <div>
        <h3>Data from Reducer:</h3>
        {JSON.stringify(state, null, 3)}
      </div>
      <Button onClick={handleLogout} variant="contained" sx={{ mt: 3, mb: 2 }}>
        LOGOUT
      </Button>
    </div>
  );
};
