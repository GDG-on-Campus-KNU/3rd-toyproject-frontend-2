import { Card, CardContent, Typography } from '@mui/material';

const CallCard = ({ children }) => {
    const onclickHandler = () => {
        console.log('click');
    };
    return (
        <Card
            sx={{
                m: 0.25,
                color: 'black',
                backgroundColor: 'white',
                borderColor: 'black',
                //     textAlign: 'center',
                width: '6rem',
                height: '6rem',
                borderRadius: 5,
                marginBottom: '1rem',
                ':hover': {
                    color: '#FFC700',
                    borderColor: '#FFC700',
                    backgroundColor: 'black',
                },
            }}
            variant="outlined"
            onClick={onclickHandler}
        >
            <CardContent
                align="center"
                // gutterBottom
                component="div"
            >
                <Typography
                    align="center"
                    sx={{
                        fontSize: '1rem',
                        padding: '0.25rem',
                    }}
                >
                    {children}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CallCard;
