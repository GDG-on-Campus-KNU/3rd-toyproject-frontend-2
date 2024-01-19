import { Button } from '@mui/material';

import { StaffCallButtonStyle } from '../../../styles/CallPageStyle';

const StaffCallButton = ({ children }) => {
    const StaffBtnHandler = () => {
        alert('직원을 호출했습니다.');
    };

    return (
        <div>
            <Button sx={StaffCallButtonStyle} onClick={StaffBtnHandler} variant="outlined">
                {children}
            </Button>
        </div>
    );
};

export default StaffCallButton;
