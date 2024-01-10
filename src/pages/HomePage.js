import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import "./BackgroundColor.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const homelogo = {
  // width: "100vw",
  height: "100vh",
  // background: #202124,
  bgcolor: "#202124",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const HomePage = () => {
  return (
    <Container>
      <Box sx={homelogo}>
        <Logo />
      </Box>
    </Container>
    // <div className="homelogo">
    //   <Logo />
    // </div>
  );
};

export default HomePage;
