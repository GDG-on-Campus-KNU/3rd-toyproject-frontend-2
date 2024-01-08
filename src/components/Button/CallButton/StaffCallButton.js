import { Button } from '@mui/material';

const StaffCallButton = ({ children }) => {
    return (
        <Button
            sx={{
                m: 5,
                color: 'black',
                backgroundColor: '#FFC700',
                borderColor: 'black',
                width: '29rem',
                // width: '33.5rem',
                height: '3rem',
                borderRadius: 3,
                marginX: 'auto',
                fontSize: '1.2rem',

                ':hover': {
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: '#FFC700',
                },
            }}
            variant="outlined"
        >
            {children}
        </Button>
    );
};

export default StaffCallButton;
