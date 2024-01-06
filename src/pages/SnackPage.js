import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuCard from "../components/Card/MenuCard"
import zzuggumi from '../assets/zzuggumi.png'
import dakbal from '../assets/dakbal.png'
import ggozi from '../assets/ggozi.png'
import kongbul from '../assets/kongbul.png'
import topoki from '../assets/topoki.png'
import muktae from '../assets/muktae.png'
import "./BackgroundColor.css";

const SnackPage = () => {
    
    return (
        <Container fixed sx={{ m: 9}}>
            <Grid container spacing={10}>
                <Grid item xs={2}>
                    CategoryBar
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <MenuCard image={zzuggumi} menu="쭈꾸미낙지볶음" price="23,000"/>
                        </Grid>
                            <Grid item xs={4}>
                                <MenuCard image={dakbal} menu="직화무뼈닭발" price="23,000"/>
                            </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={ggozi} menu="모듬꼬치" price="18,000"/>
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={kongbul} menu="콩나물불고기" price="15,000"/>
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={topoki} menu="떡볶이납작만두" price="12,000"/>
                        </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={muktae} menu="마른안주세트" price="12,000"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SnackPage;
