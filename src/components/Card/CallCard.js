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
            <CardContent align="center" component="div">
                {children === '양념치킨 소스' || children === '건어물 소스' ? (
                    <Typography
                        align="center"
                        sx={{
                            fontSize: '1rem',
                            marginTop: '0.25rem',
                            padding: '0.25rem',
                        }}
                    >
                        {children}
                    </Typography>
                ) : (
                    <Typography
                        align="center"
                        sx={{
                            fontSize: '1rem',
                            marginTop: '1rem',
                            padding: '0.25rem',
                        }}
                    >
                        {children}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default CallCard;
