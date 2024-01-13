import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import bill from '../../assets/Group.png';

const FooterButton = ({ footer, color, page }) => {
    return (
        <Stack spacing={2} direction="row">
            <Button
                startIcon={
                    footer === '장바구니' ? <ShoppingBagIcon /> : <img src={bill} alt="bill" width="20" height="20" />
                }
                href={page}
                sx={{
                    color: 'black',
                    backgroundColor: color === 'selected' ? '#FFC700' : 'white',
                    borderColor: 'black',
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
            >
                <Typography>{footer}</Typography>
            </Button>
        </Stack>
    );
};

export default FooterButton;
