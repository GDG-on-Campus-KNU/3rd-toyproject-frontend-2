import { Button } from '@mui/material';

import { minusButtonStyle } from '../../../styles/CallPageStyle';

const AllRemove = () => {
    const AllRemoveHandler = () => {
        alert('요청을 모두 삭제했습니다.');
    };

    return (
        <Button sx={minusButtonStyle} onClick={AllRemoveHandler}>
            전체 삭제
        </Button>
    );
};

export default AllRemove;
