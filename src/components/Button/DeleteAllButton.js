import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const numButtonStyle = {
  borderRadius: "50px",
  bgcolor: "#000000",
  "&:hover": { bgcolor: "#808080" },
};

const DeleteAllButton = ({ getPosts }) => {
  const DelAllClick = () => {
    alert("전체삭제 합니다.");
    // ㅡㅡㅡㅡㅡㅡ여기는 백엔드랑 프론트 기능 완성되면 확인가능ㅡㅡㅡㅡㅡ
    axios.delete("/api/cart").then((res) => {
      console.log(res);
      alert("전체삭제 되었습니다.");
      getPosts();
    });
  };

  return (
    <Button variant="contained" onClick={DelAllClick} sx={numButtonStyle}>
      전체삭제
    </Button>
  );
};

export default DeleteAllButton;
