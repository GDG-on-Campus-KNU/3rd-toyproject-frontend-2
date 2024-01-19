import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import axios from 'axios';

import React from 'react'; //추가

const MenuCard = ({ id, image, menu, price }) => { //onSelect prop 추가
    const handleClick = () => { //추가 (메뉴 카드가 클릭되면 onSelect 함수 호출)
        axios.post('http://35.208.58.86:8080/api/cart',{
            "menuId":id,
            "menuName":menu,
            "menuPrice":price,
            "amount":"1"
        },
        { withCredentials: true }
        ).then(function (response) {
            console.log(response);
        }).catch(function (error){
            console.log(error);
        });
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
