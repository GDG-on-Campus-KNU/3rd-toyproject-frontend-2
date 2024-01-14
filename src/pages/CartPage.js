// import Footer from "../components/Footer";
// import CartList from "../components/List/CartList.js";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import "./BackgroundColor.css";

import tag from "../assets/tag.png";

const billBoxStyle = {
  bgcolor: "#ffffff",
  height: "77vh",
  borderRadius: "15px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const titleBoxStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  width: "100%",
};

const closeButtonStyle = {
  borderRadius: "50px",
  bgcolor: "#000000",
  "&:hover": { bgcolor: "#808080" },
  marginLeft: "auto",
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

const numButtonStyle = {
  borderRadius: "50px",
  bgcolor: "#000000",
  "&:hover": { bgcolor: "#808080" },
};

const orderButtonStyle = {
  color: "black",
  borderRadius: "50px",
  bgcolor: "#FFC700",
  "&:hover": { bgcolor: "#808080" },
};

const tagImgStyle = {
  width: "50px",
  height: "50px",
  marginRight: "20px",
};

const priceStyle = {
  marginLeft: "auto",
};

const h4Style = {
  color: "#ffc700",
  margin: 5,
  fontWeight: "bold",
};

const h5Style = {
  color: "#ffc700",
  margin: 5,
  fontWeight: "bold",
  //   marginLeft: "auto",
};

const line1Style = {
  borderTop: "5px solid #ffc700",
  width: "100%",
  marginY: "10px",
};

const line2Style = {
  borderTop: "1px solid #000000",
  width: "100%",
  marginBottom: "10px",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "7fr 2fr 1fr 2fr",
  gap: "10px",
};

const textCellStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  width: "100%",
  //   padding: "20px",
};

const paperBoxStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",

  display: "inline-flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  height: "100%",
  //   border: "1px solid #000",
  //   borderRadius: "50px",
  padding: "5px",
  width: "100%",
  marginBottom: "15px",
  marginTop: "15px",
};

const CartPage = () => {
  return (
    <Container fixed sx={{ m: 9 }}>
      <Grid container>
        <Grid item xs={2}>
          CategoryBar
        </Grid>
        <Grid item xs={10}>
          <Box sx={billBoxStyle}>
            <Box sx={titleBoxStyle}>
              <img src={tag} style={tagImgStyle} />
              <Typography variant="h4" style={h4Style}>
                장바구니
              </Typography>
              <Button href={"soup"} variant="contained" sx={closeButtonStyle}>
                X 닫기
              </Button>
            </Box>
            <Box sx={line1Style} />

            {/* 장바구니 내역 */}
            <Paper elevation={0} sx={{ width: "100%", minHeight: "70%" }}>
              <Box>
                <Box sx={textCellStyle}>
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    1 참이슬
                  </Typography>

                  <Button variant="contained" sx={cartDeleteButtonStyle}>
                    X
                  </Button>
                </Box>

                {/* 여기수정해야함 */}
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

              <Box>
                <Box sx={textCellStyle}>
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    2 직화무뼈닭발
                  </Typography>

                  <Button variant="contained" sx={cartDeleteButtonStyle}>
                    X
                  </Button>
                </Box>

                {/* 여기수정해야함 */}
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

                {/* 여기수정해야함 */}
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
              <Box sx={line2Style} />
            </Paper>

            <Box sx={line1Style} />

            <Grid container sx={{ minHeight: "5%" }}>
              <Grid item xs={4}>
                <Paper
                  elevation={0}
                  sx={{
                    minHeight: "100% ",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" style={h5Style}>
                    합계 45,000원
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={8}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={paperBoxStyle}>
                    <Button variant="contained" sx={numButtonStyle}>
                      전체삭제
                    </Button>
                    <Button
                      href={"soup"}
                      variant="contained"
                      sx={numButtonStyle}
                    >
                      계속 선택하기
                    </Button>
                    <Button variant="contained" sx={numButtonStyle}>
                      결제수단
                    </Button>
                    <Button variant="contained" sx={orderButtonStyle}>
                      주문하기
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
