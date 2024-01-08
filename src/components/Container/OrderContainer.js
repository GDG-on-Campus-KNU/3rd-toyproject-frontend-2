import { Container } from '@mui/material';
import Plus from '../Button/CallButton/Plus';
import Minus from '../Button/CallButton/Minus';

const OrderContainer = ({ children }) => {
    return (
        <Container sx={{ backgroundColor: 'white', width: '3rem' }}>
            <Plus /> <Minus />
        </Container>
    );
};

export default OrderContainer;
