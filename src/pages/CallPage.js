import { Grid, Container } from '@mui/material';

import StaffCallButton from '../components/Button/CallButton/StaffCallButton.js';
import OrderContainer from '../components/OrderContainer.js';
import CardContainer from '../components/CardContainer.js';
import CategoryBar from '../components/CategoryBar.js';
import Footer from '../components/Footer.js';
import { orderGridStyle } from '../styles/CallPageStyle.js';
import ButtonContainer from '../components/ButtonContainer.js';

const CallPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar category="call" />
                </Grid>
                <Grid item xs={6}>
                    <CardContainer />
                    <Grid>
                        <StaffCallButton>직원만 호출하기</StaffCallButton>
                    </Grid>
                </Grid>
                <Grid container sx={orderGridStyle} xs={4} justifyContent="space-between">
                    <Grid item>
                        <OrderContainer />
                        <OrderContainer />
                    </Grid>

                    <Grid item marginY={2} marginRight={2}>
                        <ButtonContainer />
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
};

export default CallPage;
