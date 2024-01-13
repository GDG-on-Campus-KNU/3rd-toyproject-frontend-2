import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Minus from './Button/CallButton/Minus';
import Plus from './Button/CallButton/Plus';
import { buttonStyle1, buttonStyle2, buttonTextMarginStyle, lineStyle } from '../styles/CallPageStyle';

const OrderContainer = ({ children }) => {
    return (
        <>
            <Grid item display="flex" marginTop="1rem" marginX="1rem">
                <Typography sx={buttonStyle2}>숟가락</Typography>
                <Plus />
                <Typography sx={buttonStyle2}>3개</Typography>
                <Minus />
                <Button sx={buttonStyle1}>삭제</Button>
            </Grid>
            <Box sx={lineStyle} alignContent="center" />
        </>
    );
};

export default OrderContainer;
