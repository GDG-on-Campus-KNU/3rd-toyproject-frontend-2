import StaffCallButton from '../components/Button/CallButton/StaffCallButton.js';
import CallCard from '../components/Card/CallCard';
import { Grid, Container } from '@mui/material';
import OrderContainer from '../components/Container/OrderContainer';
import CategoryButton from '../components/Button/CategoryButton.js';

const CallPage = () => {
    return (
        <Container sx={{ m: 4 }}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <CategoryButton />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <CallCard>숟가락</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>젓가락</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>집게</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>가위</CallCard>
                        </Grid>

                        <Grid item xs={3}>
                            <CallCard>물티슈</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>냅킨</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>소주잔</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>맥주잔</CallCard>
                        </Grid>

                        <Grid item xs={3}>
                            <CallCard>양념치킨 소스</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>건어물 소스</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>간장소스</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>마요네즈</CallCard>
                        </Grid>

                        <Grid item xs={3}>
                            <CallCard>기본안주</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>물</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>얼음컵</CallCard>
                        </Grid>
                        <Grid item xs={3}>
                            <CallCard>앞접시</CallCard>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <StaffCallButton>직원만 호출하기</StaffCallButton>
                    </Grid>
                </Grid>
                <Grid item backgroundColor="white" xs={2}>
                    <OrderContainer>adasd</OrderContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CallPage;
