import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
