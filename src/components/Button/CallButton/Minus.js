import { Button, Typography } from '@mui/material';

import { buttonTextStyle1, minusButtonStyle } from '../../../styles/CallPageStyle';

const Minus = () => {
    return (
        <button style={minusButtonStyle}>
            <Typography sx={buttonTextStyle1}>-</Typography>
        </button>
    );
};

export default Minus;
