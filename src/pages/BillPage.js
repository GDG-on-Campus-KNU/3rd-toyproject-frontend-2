import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import './BackgroundColor.css';
import tag from '../assets/tag.png';
import { useNavigate } from 'react-router-dom';

import {
    billBoxStyle,
    closeButtonStyle,
    gridContainerStyle,
    h4Style,
    h5Style,
    line1Style,
    line2Style,
    numButtonStyle,
    paperBoxStyle,
    tagImgStyle,
    textCellStyle,
    titleBoxStyle,
} from '../styles/BillPageStyle';

const BillPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const [apiResponse, setApiResponse] = useState({
        orderId: 0,
        totalPrice: 0,
        items: [],
    });

    const [numOfPeople, setNumOfPeople] = useState(3); // 초기값 3

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://35.208.58.86:8080/api/order');
                const data = await response.json();
                setApiResponse(data);
            } catch (error) {
                console.error('API 호출 중 오류 발생:', error);
            }
        };

        fetchData();
    }, []);

    const handleIncrement = () => {
        setNumOfPeople(num => num + 1);
    };

    const handleDecrement = () => {
        setNumOfPeople(num => Math.max(1, num - 1)); // 최소값 1
    };

    return (
        <Container maxWidth="lg">
            <Grid container marginX={2}>
                <Grid item xs={10} marginX={2}>
                    <Box sx={billBoxStyle}>
                        <Box sx={titleBoxStyle}>
                            <img src={tag} style={tagImgStyle} />
                            <Typography variant="h4" style={h4Style}>
                                계산서
                            </Typography>
                            <Button variant="contained" onClick={handleGoBack} sx={closeButtonStyle}>
                                X 닫기
                            </Button>
                        </Box>
                        <Box sx={line1Style} />

                        <Paper elevation={0} sx={{ width: '100%', minHeight: '70%' }}>
                            {apiResponse.items.map(item => (
                                <React.Fragment key={item.orderItemId}>
                                    <Box sx={gridContainerStyle}>
                                        <Box sx={textCellStyle}>
                                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                                {item.menuName}
                                            </Typography>
                                        </Box>
                                        <Box sx={textCellStyle}>
                                            <Typography variant="body1">{item.menuPrice.toFixed(2)}원</Typography>
                                        </Box>
                                        <Box sx={textCellStyle}>
                                            <Typography variant="body1">{item.amount}개</Typography>
                                        </Box>
                                        <Box sx={textCellStyle}>
                                            <Typography variant="body1">{item.itemTotalPrice.toFixed(2)}원</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={line2Style} />
                                </React.Fragment>
                            ))}
                        </Paper>

                        <Box sx={line1Style} />

                        <Grid container spacing={2} sx={{ minHeight: '15%' }}>
                            <Grid item xs={8}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box sx={paperBoxStyle}>
                                        <Typography variant="body1" style={{ marginRight: '10px' }}>
                                            더치페이
                                        </Typography>
                                        <Button variant="contained" onClick={handleIncrement} sx={numButtonStyle}>
                                            +
                                        </Button>
                                        <Typography variant="body1" style={{ margin: '0 10px' }}>
                                            {numOfPeople}
                                        </Typography>
                                        <Button variant="contained" onClick={handleDecrement} sx={numButtonStyle}>
                                            -
                                        </Button>
                                        <Typography variant="body1" style={{ marginLeft: '10px' }}>
                                            1인당 {(apiResponse.totalPrice / numOfPeople).toFixed(2)}원
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper elevation={0} sx={{ minHeight: '100% ', display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h5" style={h5Style}>
                                        합계 {apiResponse.totalPrice}원
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BillPage;
