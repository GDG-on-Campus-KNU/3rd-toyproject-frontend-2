import { Button } from '@mui/material';

const Plus = () => {
    return (
        <Button
            size="small"
            sx={{
                m: 1,
                color: 'white',
                backgroundColor: 'black',
                borderRadius: 2,
                fontSize: '1rem',

                ':hover': {
                    color: 'white',
                    borderColor: 'black',
                    backgroundColor: 'black',
                },
            }}
        >
            +
        </Button>
    );
};

export default Plus;
