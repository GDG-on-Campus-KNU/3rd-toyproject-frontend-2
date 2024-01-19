import { Button, Grid } from '@mui/material';

import { StaffCallButtonStyle } from '../../../styles/CallPageStyle';

const StaffCallButton = ({ children }) => {
    const StaffBtnHandler = () => {
        alert('직원을 호출했습니다.');
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button sx={StaffCallButtonStyle} onClick={StaffBtnHandler} variant="outlined">
                    {children}
                </Button>
            </Grid>
        </Grid>
    );
};

export default StaffCallButton;
