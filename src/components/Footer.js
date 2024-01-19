import Stack from '@mui/material/Stack';
import FooterButton from './Button/FooterButton';

const Footer = (footer) => {
    const getColor = (currentCategory) => {
        return footer.footer === currentCategory ? 'selected' : 'default';
    };

    return (
        <Stack spacing={2} direction="row">
            <FooterButton page="bill" footer="계산서" color={getColor('bill')} />
            <FooterButton page="cart" footer="장바구니" color={getColor('cart')} />
        </Stack>
    );
};

export default Footer;
