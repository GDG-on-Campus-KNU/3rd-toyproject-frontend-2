import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';

const CategoryButton = () => {
    return (
        <Stack spacing={2}>
            <Stack spacing={2}>
                <Button
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
