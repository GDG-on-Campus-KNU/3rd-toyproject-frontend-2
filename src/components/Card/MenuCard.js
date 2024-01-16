import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';

import React from 'react'; //추가

const MenuCard = ({ image, menu, price, onSelect }) => { //onSelect prop 추가
    const handleClick = () => { //추가 (메뉴 카드가 클릭되면 onSelect 함수 호출)
        onSelect(menu);
        console.log('menu card is clicked!');
    }

    return (
        <Card sx={{ maxWidth: 260 }} onClick={handleClick}> {/*onClick 추가*/}
            <CardMedia sx={{ height: 180 }} image={image} title="menu thumbnail" />
            <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} align="center" gutterBottom variant="h6" component="div">
                    {menu}
                </Typography>
                <Typography align="center" variant="body1" component="div">
                    {price}원
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MenuCard;
