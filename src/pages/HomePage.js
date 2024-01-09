import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import "../App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const logoStyle = {
  bgcolor: "black",
  display: "flex",
  alignItems: "center",
  justify: "center",
  //   marginBottom: "10px",
  //   width: "100%",
};

const HomePage = () => {
  return (
    <div className="body">
      <Logo />
    </div>
  );
};

export default HomePage;
