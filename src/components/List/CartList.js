import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const textCellStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  width: "100%",
  //   padding: "20px",
};

const cartDeleteButtonStyle = {
  color: "black",
  //   width: 24,
  minWidth: 44,
  height: 34,
  borderRadius: "50px",
  bgcolor: "#D0D1D5",
  "&:hover": { bgcolor: "#808080" },
  marginLeft: "auto",
};

const priceStyle = {
  marginLeft: "auto",
};

const line2Style = {
  borderTop: "1px solid #000000",
  width: "100%",
  marginBottom: "10px",
};

const cartButtonStyle = {
  color: "black",
  //   width: 24,
  minWidth: 44,
  height: 34,
  borderRadius: "50px",
  bgcolor: "#D0D1D5",
  "&:hover": { bgcolor: "#808080" },
  // marginLeft: "auto",
};

const CartList = () => {
  return (
    <Paper elevation={0} sx={{ width: "100%", minHeight: "70%" }}>
      {/* 컴포넌트화하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      <Box>
        <Box sx={textCellStyle}>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            1 참이슬
          </Typography>

          <Button variant="contained" sx={cartDeleteButtonStyle}>
            X
          </Button>
        </Box>

        <Box sx={textCellStyle}>
          <Button variant="contained" sx={cartButtonStyle}>
            +
          </Button>
          <Typography
            variant="body1"
            style={{ marginLeft: 17, marginRight: 17 }}
          >
            2개
          </Typography>
          <Button variant="contained" sx={cartButtonStyle}>
            -
          </Button>

          <Typography variant="body1" style={priceStyle}>
            가격 10,000원
          </Typography>
        </Box>
      </Box>
      <Box sx={line2Style} />

      {/* <Box>
        <Box sx={textCellStyle}>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            2 직화무뼈닭발
          </Typography>

          <Button variant="contained" sx={cartDeleteButtonStyle}>
            X
          </Button>
        </Box>

        <Box sx={textCellStyle}>
          <Button variant="contained" sx={cartButtonStyle}>
            +
          </Button>
          <Typography
            variant="body1"
            style={{ marginLeft: 17, marginRight: 17 }}
          >
            1개
          </Typography>
          <Button variant="contained" sx={cartButtonStyle}>
            -
          </Button>

          <Typography variant="body1" style={priceStyle}>
            가격 12,000원
          </Typography>
        </Box>
      </Box>
      <Box sx={line2Style} />

      <Box>
        <Box sx={textCellStyle}>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            3 순두부찌개
          </Typography>

          <Button variant="contained" sx={cartDeleteButtonStyle}>
            X
          </Button>
        </Box>

        <Box sx={textCellStyle}>
          <Button variant="contained" sx={cartButtonStyle}>
            +
          </Button>
          <Typography
            variant="body1"
            style={{ marginLeft: 17, marginRight: 17 }}
          >
            1개
          </Typography>
          <Button variant="contained" sx={cartButtonStyle}>
            -
          </Button>

          <Typography variant="body1" style={priceStyle}>
            가격 23,000원
          </Typography>
        </Box>
      </Box>
      <Box sx={line2Style} /> */}
      {/* 컴포넌트화하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
    </Paper>
  );
};

export default CartList;
