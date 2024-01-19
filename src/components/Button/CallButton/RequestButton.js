import { Button } from '@mui/material';

import { RequestButtonStyle } from '../../../styles/CallPageStyle';

const RequestButton = () => {
    const requestBtnHandler = () => {
        alert('요청했습니다.');
    };

    return (
        <Button sx={RequestButtonStyle} onClick={requestBtnHandler}>
            요청하기
        </Button>
    );
};

export default RequestButton;
