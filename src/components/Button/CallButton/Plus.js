import { Button, Typography } from '@mui/material';

import { buttonTextStyle1, plusButtonStyle } from '../../../styles/CallPageStyle';

const Plus = () => {
    return (
        <Button sx={plusButtonStyle}>
            <Typography sx={buttonTextStyle1}>+</Typography>
        </Button>
    );
};

export default Plus;
