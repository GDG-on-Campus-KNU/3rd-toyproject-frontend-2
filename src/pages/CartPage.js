import axios from "axios";
import { useEffect, useState } from "react";
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
import { orderGridStyle } from "../styles/CallPageStyle.js";
import {
  billBoxStyle,
  titleBoxStyle,
  closeButtonStyle,
  numButtonStyle,
  tagImgStyle,
  h4Style,
  h5Style,
  line1Style,
  paperBoxStyle,
} from "../styles/CartPageStyle.js";

import tag from "../assets/tag.png";

const CartPage = () => {
  const [lists, setLists] = useState([]);
  const [payment, setPayment] = useState("CARD");
  const [totalPrice, setTotalPrice] = useState(0);

  const getPosts = () => {
    axios.get(`/api/cart`).then((res) => {
      console.log(res);
      setLists(res.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

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
            <CartList lists={lists} setLists={setLists} getPosts={getPosts} />

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
                    합계 &nbsp;{lists.cartTotalPrice}원
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
                    <DeleteAllButton getPosts={getPosts} />

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
                    <OrderButton payment={payment} getPosts={getPosts} />
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
