import { Card, Typography } from '@mui/material';
import { buttonTextStyle1, plusButtonStyle } from '../../../styles/CallPageStyle';

const Plus = () => {
    return (
        <Card sx={plusButtonStyle}>
            <Typography sx={buttonTextStyle1}>+</Typography>
        </Card>
    );
};

export default Plus;
