import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MenuCard from '../components/Card/MenuCard';
import CategoryBar from '../components/CategoryBar';

import terra from '../assets/terra.png';
import cass from '../assets/cass.png';
import chamiseul from '../assets/chamiseul.png';
import jinlo from '../assets/jinlo.png';
import chungha from '../assets/chungha.png';
import highball from '../assets/highball.png';

import './BackgroundColor.css';
import Footer from '../components/Footer';

import React, { useEffect, useState } from 'react';

const DrinkPage = () => {
    // DrinkPage.js - MenuCard.js - DrinkMenuButton.js 백엔드와 제대로 통신하는지 확인 필요
    const [selectedMenus, setSelectedMenus] = useState([]);
    const [responseData, setResponseData] = useState(null);

   
    useEffect(() => {
        if (selectedMenus.length > 0) {
            //통신 함수 이용
            drinkSelectMenus(selectedMenus)
                .then(data => {
                    console.log('백엔드 응답 데이터:', data);
                    setResponseData(data);
                })
                .catch(error => {
                    console.error('API 호출 중 오류 발생:', error);
                });
        }
    }, [selectedMenus]);

    const handleMenuSelect = (menu) => {
        setSelectedMenus((prevSelectedMenus) => {
            if (prevSelectedMenus.includes(menu)) {
                return prevSelectedMenus.filter((selectedMenu) => selectedMenu !== menu);
            } else {
                return [...prevSelectedMenus, menu];
            }
        });
    };

    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar category="drink" />
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <MenuCard image={terra} menu="테라" price="4,500" onSelect={() => handleMenuSelect('테라')} />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={cass} menu="카스" price="4,500" onSelect={() => handleMenuSelect('카스')} />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={chamiseul} menu="참이슬" price="5,000" onSelect={() => handleMenuSelect('참이슬')} />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={jinlo} menu="진로" price="5,000" onSelect={() => handleMenuSelect('진로')} />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={chungha} menu="별빛 청하" price="6,000" onSelect={() => handleMenuSelect('별빛 청하')} />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={highball} menu="산토리 하이볼" price="7,000" onSelect={() => handleMenuSelect('산토리 하이볼')} />
                        </Grid>
                    </Grid>
                    <Grid container marginTop={4} justifyContent="flex-end">
                        <Footer />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export const drinkSelectMenus = (selectedMenus) => {
    const apiEndpoint = 'http://35.208.58.86:8080/api/order';

    return fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            selectedMenus: selectedMenus,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('백엔드 응답:', data);
        return data;
    })
    .catch(error => {
        console.error('API 요청 중 오류 발생:', error);
        throw error;
    });
};

export default DrinkPage;
