import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const FooterButton = ({ footer, color, page }) => {
    return (
        <Stack spacing={2} direction="row">
            <Button
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
