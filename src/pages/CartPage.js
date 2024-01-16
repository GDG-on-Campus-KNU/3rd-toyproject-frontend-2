import { useState } from "react";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";
import CartList from "../components/List/CartList.js";
import PaymentButton from "../components/Button/PaymentButton.js";
import OrderButton from "../components/Button/OrderButton.js";
import DeleteAllButton from "../components/Button/DeleteAllButton.js";

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

const numButtonStyle = {
  borderRadius: "50px",
  bgcolor: "#000000",
  "&:hover": { bgcolor: "#808080" },
};

const tagImgStyle = {
  width: "50px",
  height: "50px",
  marginRight: "20px",
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

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "7fr 2fr 1fr 2fr",
  gap: "10px",
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
  const [payment, setPayment] = useState("CARD");
  const [totalPrice, setTotalPrice] = useState(0);

  const paymentFunction = (pm) => {
    setPayment(pm);
  };

  return (
    <Container maxWidth="lg">
      <Grid container marginY="1px" spacing={4}>
        <Grid item xs={2}>
          <CategoryBar />
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

            {/* 장바구니 리스트 */}
            <CartList />

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
                    합계 &nbsp;{totalPrice}원
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
                    {/* 전체삭제버튼 */}
                    <DeleteAllButton />

                    <Button
                      href={"soup"}
                      variant="contained"
                      sx={numButtonStyle}
                    >
                      계속 선택하기
                    </Button>

                    {/* 결제수단 버튼 */}
                    <PaymentButton paymentFunction={paymentFunction} />

                    {/* 주문하기 버튼 */}
                    {/* 여기에 결제수단 payment정보 api송출 */}
                    <OrderButton payment={payment} />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Grid container marginTop={4} justifyContent="flex-end">
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
