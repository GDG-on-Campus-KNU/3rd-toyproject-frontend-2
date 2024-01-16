import { Button, Grid, Typography } from '@mui/material';
import Minus from './Button/CallButton/Minus';
import Plus from './Button/CallButton/Plus';
import { buttonStyle1, buttonStyle2, gridStyle1, lineStyle } from '../styles/CallPageStyle';

const OrderContainer = ({ order, number }) => {
    return (
        <>
            <Grid item sx={gridStyle1}>
                <Typography sx={buttonStyle2}>{order}</Typography>
                <Plus />
                <Typography sx={buttonStyle2}>{number}개</Typography>
                <Minus />
                <Button sx={buttonStyle1}>삭제</Button>
            </Grid>
            <Grid item>
                <Typography sx={lineStyle} alignContent="center" />
            </Grid>
        </>
    );
};

export default OrderContainer;
