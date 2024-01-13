import { Grid, Container } from '@mui/material';

import StaffCallButton from '../components/Button/CallButton/StaffCallButton.js';
import OrderContainer from '../components/OrderContainer.js';
import CardContainer from '../components/CardContainer.js';
import CategoryBar from '../components/CategoryBar.js';
import Footer from '../components/Footer.js';
import { orderGridStyle } from '../styles/CallPageStyle.js';

const CallPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar category="call" />
                </Grid>
                <Grid item xs={6}>
                    <CardContainer />
                    <Grid item xs={12}>
                        <StaffCallButton>직원만 호출하기</StaffCallButton>
                    </Grid>
                </Grid>
                <Grid container sx={orderGridStyle} xs={4}>
                    <OrderContainer />
                    <OrderContainer />
                </Grid>
                <Grid container marginTop={4} justifyContent="flex-end">
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
};

export default CallPage;
