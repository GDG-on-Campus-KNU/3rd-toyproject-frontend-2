import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import CallPage from '../../pages/CallPage';

const CategoryButton = () => {
    return (
        <Stack spacing={2}>
            <Stack spacing={2}>
                <Button
                    href="soup"
                    sx={{
                        color: 'black',
                        backgroundColor: 'white',
                        borderColor: 'black',
                        width: '8.5rem',
                        height: '3rem',
                        borderRadius: 3,
                        fontSize: '1rem',

                        ':hover': {
                            color: 'black',
                            borderColor: 'black',
                            backgroundColor: '#FFC700',
                        },
                    }}
                >
                    국물류
                </Button>
            </Stack>
            <Button
                href="snack"
                sx={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderColor: 'black',
                    width: '8.5rem',
                    height: '3rem',
                    borderRadius: 3,
                    fontSize: '1rem',

                    ':hover': {
                        color: 'black',
                        borderColor: 'black',
                        backgroundColor: '#FFC700',
                    },
                }}
            >
                안주류
            </Button>
            <Button
                href="drink"
                sx={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderColor: 'black',
                    width: '8.5rem',
                    height: '3rem',
                    borderRadius: 3,
                    fontSize: '1rem',

                    ':hover': {
                        color: 'black',
                        borderColor: 'black',
                        backgroundColor: '#FFC700',
                    },
                }}
            >
                주류
            </Button>
            <Button
                href="call"
                sx={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderColor: 'black',
                    width: '8.5rem',
                    height: '3rem',
                    borderRadius: 3,
                    fontSize: '1rem',

                    ':hover': {
                        color: 'black',
                        borderColor: 'black',
                        backgroundColor: '#FFC700',
                    },
                }}
            >
                직원호출
            </Button>
        </Stack>
    );
};

export default CategoryButton;
