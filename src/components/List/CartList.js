import axios from "axios";
import { useEffect, useState } from "react";
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
  const [lists, setLists] = useState([]);

  const getPosts = () => {
    axios.get("http://35.208.58.86:8080/api/cart").then((res) => {
      console.log(res.data);
      setLists(res.data);
    });
  };

  const deleteList = (e, id) => {
    e.stopPropagation();
    // console.log("delete blogs");
    axios.delete(`http://35.208.58.86:8080/api/cart/${id}`).then(() => {
      setLists((prevLists) => {
        return prevLists.filter((list) => {
          return list.id !== id;
        });
      });
    });
  };

  const plusAmount = (amount, id) => {
    axios
      .patch(`http://35.208.58.86:8080/api/cart/${id}`, {
        amount: amount + 1,
      })
      .then((res) => {
        setLists(res.data);
        console.log("수량증가완료");
      });
  };

  const minusAmount = (amount, id) => {
    axios
      .patch(`http://35.208.58.86:8080/api/cart/${id}`, {
        amount: amount - 1,
      })
      .then((res) => {
        setLists(res.data);
        console.log("수량감소완료");

        // 수량 변경 후 amount가 0이 되면 장바구니에서 해당 상품 삭제
        if (amount === 0) {
          deleteList(res, id);
        }
      });
  };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  if (lists.length === 0) {
    return (
      <Paper elevation={0} sx={{ width: "100%", minHeight: "70%" }}></Paper>
    );
  }

  return (
    <Paper elevation={0} sx={{ width: "100%", minHeight: "70%" }}>
      {/* 컴포넌트화하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {lists.map((list) => (
        <Box>
          <Box sx={textCellStyle}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              {list.cartItems[0].menuId} {list.cartItems[0].menuName} 1 참이슬
            </Typography>

            <Button
              variant="contained"
              onClick={(e) => deleteList(e, list.cartItems[0].menuId)}
              sx={cartDeleteButtonStyle}
            >
              X
            </Button>
          </Box>

          <Box sx={textCellStyle}>
            <Button
              variant="contained"
              onClick={plusAmount(
                list.cartItems[0].amount,
                list.cartItems[0].menuId
              )}
              sx={cartButtonStyle}
            >
              +
            </Button>
            <Typography
              variant="body1"
              style={{ marginLeft: 17, marginRight: 17 }}
            >
              {list.cartItems[0].amount}개
            </Typography>
            <Button
              variant="contained"
              onClick={minusAmount(
                list.cartItems[0].amount,
                list.cartItems[0].menuId
              )}
              sx={cartButtonStyle}
            >
              -
            </Button>

            <Typography variant="body1" style={priceStyle}>
              가격 {list.cartItems[0].menuPrice}원
            </Typography>
          </Box>
          <Box sx={line2Style} />
        </Box>
      ))}

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
        <Box sx={line2Style} />
      </Box>

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
        <Box sx={line2Style} />
      </Box> */}

      {/* 컴포넌트화하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
    </Paper>
  );
};

export default CartList;
