import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormHelperText } from "@mui/material";
import styles from "../../styles.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthLayout = () => {
  const [formData, setFormData] = useState({});

  const { state, login } = useContext(AuthContext);

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
    console.log(state);
    login(formData.username, formData.password);
  };

  const handleLogout = () => {
    // dispatch({
    //   type: "LOGOUT",
    //   payload: {
    //     msg: "Usuario DESLOGUEADO con éxito.",
    //   },
    // });
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
      <Button onClick={handleLogout} variant="contained" sx={{ mt: 3, mb: 2 }}>
        LOGOUT
      </Button>
    </div>
  );
};
