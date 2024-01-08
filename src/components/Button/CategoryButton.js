import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

const CategoryButton = () => {
    return (
        <Stack>
            <Button>국물류</Button>
            <Button>안주류</Button>
            <Button>주류</Button>
            <Button>직원호출</Button>
        </Stack>
    );
};

export default CategoryButton;
