import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MenuCard = ({image, menu, price}) => {
    return (
    <Card sx={{ maxWidth: 260}}>
        <CardMedia
            sx={{ height: 180 }}
            image={image}
            title="menu thumbnail"
        />
        <CardContent>
            <Typography sx={{ fontWeight: 'bold'}} align='center' gutterBottom variant='h6' component="div">
                {menu}
            </Typography>
            <Typography align='center' variant='body1' component="div">
                {price}원
            </Typography>
        </CardContent>
    </Card>
    );
};

export default MenuCard;
