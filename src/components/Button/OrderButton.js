import Button from "@mui/material/Button";

const orderButtonStyle = {
  color: "black",
  borderRadius: "50px",
  bgcolor: "#FFC700",
  "&:hover": { bgcolor: "#808080" },
};

const OrderButton = (props) => {
  const { payment } = props;

  return (
    <Button variant="contained" sx={orderButtonStyle}>
      주문하기
    </Button>
  );
};

export default OrderButton;
