import { Button, Typography } from '@mui/material';

import { buttonTextStyle1, plusButtonStyle } from '../../../styles/CallPageStyle';

const Plus = () => {
    return (
        <button style={plusButtonStyle}>
            <Typography sx={buttonTextStyle1}>+</Typography>
        </button>
    );
};

export default Plus;
