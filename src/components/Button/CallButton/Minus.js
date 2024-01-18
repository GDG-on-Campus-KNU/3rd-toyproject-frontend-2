import { Button, Typography } from '@mui/material';

import { AllRemoveButtonStyle, buttonTextStyle1 } from '../../../styles/CallPageStyle';

const Minus = () => {
    return (
        <Button sx={AllRemoveButtonStyle}>
            <Typography sx={buttonTextStyle1}>-</Typography>
        </Button>
    );
};

export default Minus;
