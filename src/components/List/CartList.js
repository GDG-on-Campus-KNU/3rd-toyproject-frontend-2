import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import {
  textCellStyle,
  cartDeleteButtonStyle,
  priceStyle,
  line2Style,
  cartButtonStyle,
} from "../../styles/CartPageStyle.js";

const CartList = ({ lists, setLists, getPosts }) => {
  const deleteList = (e, id) => {
    e.stopPropagation();
    // console.log("delete blogs");
    axios
      .delete(`/api/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        setLists(res.data);
        getPosts();
        console.log("메뉴 삭제 완료");
      })
      .catch((res) => {
        console.log(res, "실패");
      });
  };

  const plusAmount = (id) => {
    axios
      .patch(
        `/api/cart/${id}`,
        {
          amount: 1,
        }
        // { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.cartItems[id]);
        setLists(res.data);
        console.log("수량증가완료");
      })
      .catch((res) => {
        console.log(res, "실패");
      });
  };

  const minusAmount = (id) => {
    axios
      .patch(
        `/api/cart/${id}`,
        {
          amount: -1,
        }
        // { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data.cartItems[id]);
        setLists(res.data);
        console.log("수량감소완료");
      })
      .catch((res) => {
        console.log(res, "실패");
      });
  };

  if (lists.length === 0) {
    return (
      <Paper elevation={0} sx={{ width: "100%", minHeight: "70%" }}></Paper>
    );
  }

  return (
    <Paper elevation={0} sx={{ width: "100%", minHeight: "70%" }}>
      {/* 컴포넌트화하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {/* {console.log(lists)} */}
      {/* {lists.cartItems.map((list) => {
        return <div key={list.menuId}>{list.menuName}</div>;
      })} */}

      {lists.cartItems.map((list, index) => {
        return (
          <Box key={list.menuId}>
            <Box sx={textCellStyle}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {index + 1} {list.menuName}
              </Typography>

              <Button
                variant="contained"
                onClick={(e) => deleteList(e, index)}
                sx={cartDeleteButtonStyle}
              >
                X
              </Button>
            </Box>

            <Box sx={textCellStyle}>
              <Button
                variant="contained"
                onClick={() => plusAmount(index)}
                sx={cartButtonStyle}
              >
                +
              </Button>
              <Typography
                variant="body1"
                style={{ marginLeft: 17, marginRight: 17 }}
              >
                {list.amount}개
              </Typography>
              <Button
                variant="contained"
                onClick={() => minusAmount(index)}
                sx={cartButtonStyle}
              >
                -
              </Button>

              <Typography variant="body1" style={priceStyle}>
                가격 {list.totalPrice}원
              </Typography>
            </Box>
            <Box sx={line2Style} />
          </Box>
        );
      })}
    </Paper>
  );
};

export default CartList;
