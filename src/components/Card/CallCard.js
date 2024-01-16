import { Card, CardContent, Typography } from '@mui/material';
import { callCardStyle, cardStyle1, cardStyle2 } from '../../styles/CallPageStyle';

const CallCard = ({ children }) => {
    const onclickHandler = () => {
        console.log('click');
    };
    return (
        <Card sx={callCardStyle} variant="outlined" onClick={onclickHandler}>
            <CardContent align="center" component="div">
                {children === '양념치킨 소스' || children === '건어물 소스' ? (
                    <Typography align="center" sx={cardStyle1}>
                        {children}
                    </Typography>
                ) : (
                    <Typography align="center" sx={cardStyle2}>
                        {children}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default CallCard;
