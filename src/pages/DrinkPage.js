import CategoryBar from '../components/CategoryBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const DrinkPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar />
                </Grid>
                <Grid item xs={10}>
                    DrinkPage
                </Grid>
            </Grid>
        </Container>
    );
};

export default DrinkPage;
