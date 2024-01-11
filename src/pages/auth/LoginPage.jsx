import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { FormHelperText } from '@mui/material';
import styles from '../../../styles.module.css'



export const LoginPage = () => {


  return (
    
    <div className={styles.form}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              // error
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
                          />
            <TextField
              // error
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
                          />

            <FormHelperText
              id="component-helper-text"
              sx={{ color:'red' }}
            >
            </FormHelperText>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              INGRESAR
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Recuperar Contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Box marginTop={5} textAlign={'left'}>
            <Typography variant='body2'>User: kminchelle</Typography>
            <Typography variant='body2'>Pass: 0lelplR</Typography>
          </Box>
    </div>
  )
}
