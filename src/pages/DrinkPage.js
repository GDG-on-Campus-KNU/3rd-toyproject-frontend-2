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

const DrinkPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar />
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <MenuCard image={terra} menu="테라" price="4,500" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={cass} menu="카스" price="4,500" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={chamiseul} menu="참이슬" price="5,000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={jinlo} menu="진로" price="5,000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={chungha} menu="별빛 청하" price="6,000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={highball} menu="산토리 하이볼" price="7,000" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DrinkPage;
