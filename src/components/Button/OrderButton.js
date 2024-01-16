import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const orderButtonStyle = {
  color: "black",
  borderRadius: "50px",
  bgcolor: "#FFC700",
  "&:hover": { bgcolor: "#808080" },
};

const OrderButton = (props) => {
  const { payment } = props;

  const OrderClick = () => {
    alert(payment + "로 결제한다.");

    // ㅡㅡㅡㅡㅡㅡ여기는 백엔드랑 프론트 기능 완성되면 확인가능ㅡㅡㅡㅡㅡ
    const getPosts = () => {
      axios
        .post("http://35.208.58.86:8080/api/payment", {
          paymentMethod: payment,
        })
        .then((res) => {
          console.log("zzz");
          alert("주문이 완료되었습니다!");
        });
    };

    useEffect(() => {
      getPosts();
    }, []);
  };

  return (
    <Button variant="contained" onClick={OrderClick} sx={orderButtonStyle}>
      주문하기
    </Button>
  );
};

export default OrderButton;
