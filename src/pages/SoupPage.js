import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuCard from "../components/Card/MenuCard";
import gobdori from "../assets/gobdori.png"
import alltang from "../assets/alltang.png"
import bazirak from "../assets/bazirak.png"
import zzambbong from "../assets/zzambbong.png"
import fishcake from "../assets/fishcake.png"
import sundubu from "../assets/sundubu.png"
import "./BackgroundColor.css";

const SoupPage = () => {

    return (
    <Container fixed sx={{ m: 9}}>
        <Grid container spacing={10}>
            <Grid item xs={2}>
                CategoryBar
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <MenuCard image={gobdori} menu="곱도리탕" price="28,000"/>
                    </Grid>
                        <Grid item xs={4}>
                            <MenuCard image={alltang} menu="알탕" price="23,000"/>
                        </Grid>
                    <Grid item xs={4}>
                        <MenuCard image={bazirak} menu="바지락술찜" price="23,000"/>
                    </Grid>
                    <Grid item xs={4}>
                        <MenuCard image={zzambbong} menu="해물짬뽕탕" price="18,000"/>
                    </Grid>
                    <Grid item xs={4}>
                        <MenuCard image={fishcake} menu="어묵탕" price="12,000"/>
                    </Grid>
                    <Grid item xs={4}>
                        <MenuCard image={sundubu} menu="순두부찌개" price="12,000"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
};

export default SoupPage;
