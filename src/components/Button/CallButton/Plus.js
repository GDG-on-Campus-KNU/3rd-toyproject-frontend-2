import { Button, Card, Typography } from '@mui/material';
import { buttonTextStyle1 } from '../../../styles/CallPageStyle';

const Plus = () => {
    return (
        <Card
            sx={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '0.5rem',
                fontSize: '2rem',
                textAlign: 'center',
                width: '2rem',
                height: '2rem',

                ':hover': {
                    color: 'white',
                    borderColor: 'black',
                    backgroundColor: 'black',
                },
            }}
        >
            <Typography sx={buttonTextStyle1}>+</Typography>
        </Card>
    );
};

export default Plus;
