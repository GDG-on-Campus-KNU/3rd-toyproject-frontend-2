import { Grid } from '@mui/material';

import AllRemove from './Button/CallButton/AllRemove';
import RequestButton from './Button/CallButton/RequestButton';
import { callButtonContainerStyle } from '../styles/CallPageStyle';

const ButtonContainer = () => {
    return (
        <Grid item container sx={callButtonContainerStyle}>
            <Grid item>
                <AllRemove />
            </Grid>
            <Grid item>
                <RequestButton />
            </Grid>
        </Grid>
    );
};

export default ButtonContainer;
