import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

const CategoryButton = ({ category, color, page }) => {
    return (
        <Stack spacing={2}>
            <Button
                href={page}
                sx={{
                    backgroundColor: color === 'selected' ? '#FFC700' : 'white',
                    color: 'black',
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
                variant="contained"
            >
                <Typography>{category}</Typography>
            </Button>
        </Stack>
    );
};

export default CategoryButton;
