import { Grid, Container } from '@mui/material';

// import CallCard from '../components/Card/CallCard';
// import StaffCallButton from '../components/Button/CallButton/StaffCallButton.js';
// import OrderContainer from '../components/Container/OrderContainer';
import CategoryBar from '../components/CategoryBar.js';
import Footer from '../components/Footer.js';

const CallPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar category="call" />
                </Grid>
                <Grid item xs={6}>
                    CallPage
                </Grid>
            </Grid>
            <Grid container marginTop={4} justifyContent="flex-end">
                <Footer />
            </Grid>
        </Container>
    );
};

export default CallPage;
