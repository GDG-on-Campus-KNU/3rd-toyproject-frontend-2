import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const orderButtonStyle = {
  color: "black",
  borderRadius: "50px",
  bgcolor: "#FFC700",
  "&:hover": { bgcolor: "#808080" },
};

const OrderButton = ({ payment, getPosts }) => {
  // const { payment, get } = props;

  const OrderClick = () => {
    console.log(payment + "로 결제한다.");

    // ㅡㅡㅡㅡㅡㅡ여기는 백엔드랑 프론트 기능 완성되면 확인가능ㅡㅡㅡㅡㅡ
    axios
      .post(
        "/api/payment",
        {
          paymentMethod: payment,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        alert("주문이 완료되었습니다!");
        getPosts();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Button variant="contained" onClick={OrderClick} sx={orderButtonStyle}>
      주문하기
    </Button>
  );
};

export default OrderButton;
