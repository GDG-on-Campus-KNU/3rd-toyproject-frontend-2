import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuCard from '../components/Card/MenuCard';
import CategoryBar from '../components/CategoryBar';
import zzuggumi from '../assets/zzuggumi.png';
import dakbal from '../assets/dakbal.png';
import ggozi from '../assets/ggozi.png';
import kongbul from '../assets/kongbul.png';
import topoki from '../assets/topoki.png';
import muktae from '../assets/muktae.png';
import './BackgroundColor.css';
import Footer from '../components/Footer';

const SnackPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container marginY="1px" spacing={4}>
                <Grid item xs={2}>
                    <CategoryBar category="snack" />
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <MenuCard id="7" image={zzuggumi} menu="쭈꾸미낙지볶음" price="23000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard id="8" image={dakbal} menu="직화무뼈닭발" price="23000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard id="9" image={ggozi} menu="모듬꼬치" price="18000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard id="10" image={kongbul} menu="콩나물불고기" price="15000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard id="11" image={topoki} menu="떡볶이납작만두" price="12000" />
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard id="12" image={muktae} menu="마른안주세트" price="12000" />
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

export default SnackPage;
