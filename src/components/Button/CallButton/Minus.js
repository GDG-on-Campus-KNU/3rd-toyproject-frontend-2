import { Card, Typography } from '@mui/material';
import { buttonTextStyle1 } from '../../../styles/CallPageStyle';

const Minus = () => {
    return (
        <Card
            sx={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                width: '2rem',
                height: '2rem',

                ':hover': {
                    color: 'white',
                    borderColor: 'black',
                    backgroundColor: 'black',
                },
            }}
        >
            <Typography sx={buttonTextStyle1}>-</Typography>
        </Card>
    );
};

export default Minus;
