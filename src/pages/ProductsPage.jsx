import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { FooterLayout, SideBar } from "../components/ui";
import { NavBar } from "../components/ui";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Box } from "@mui/material";
import styles from "../../styles.module.css";
import ProductsList from "../components/ui/productsSection/ProductsList";

export const ProductsPage = () => {
  const { state, logout } = useContext(AuthContext);
  
  

  console.log(state);
  return (
    <>
      <NavBar
        open={open}
        user={`${state.user.firstName} ${state.user.lastName}`}
        logout={logout}
      />
      <SideBar open={open} user={state.user.username} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <h2 className={styles.title}>Productos:</h2>
        <div className={styles.productsSection}>
        <ProductsList />
        </div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <FooterLayout sx={{ pt: 4 }} />
        </Container>
      </Box>
    </>
  );
};
