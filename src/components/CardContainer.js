import { Grid } from '@mui/material';
import React from 'react';
import CallCard from './Card/CallCard';

const CardContainer = () => {
    return (
        <Grid container xs={12} direction="row">
            <Grid item xs={3}>
                <CallCard>숟가락</CallCard>
                <CallCard>물티슈</CallCard>
                <CallCard>양념치킨 소스</CallCard>
                <CallCard>기본안주</CallCard>
            </Grid>

            <Grid item xs={3}>
                <CallCard>젓가락</CallCard>
                <CallCard>냅킨</CallCard>
                <CallCard>건어물 소스</CallCard>
                <CallCard>물</CallCard>
            </Grid>

            <Grid item xs={3}>
                <CallCard>집게</CallCard>
                <CallCard>소주잔</CallCard>
                <CallCard>간장소스</CallCard>
                <CallCard>얼음컵</CallCard>
            </Grid>

            <Grid item xs={3}>
                <CallCard>가위</CallCard>
                <CallCard>맥주잔</CallCard>
                <CallCard>마요네즈</CallCard>
                <CallCard>앞접시</CallCard>
            </Grid>
        </Grid>
    );
};

export default CardContainer;
