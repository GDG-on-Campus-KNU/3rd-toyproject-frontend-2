import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CategoryButton = ({ category, color }) => {
    return (
    <Button
        sx = {{
            bgcolor: color === 'selected' ? '#FFC700' : 'white',
            color: 'black',
        }}
        variant = 'contained'>
        <Typography>{category}</Typography>
    </Button>);
};

export default CategoryButton;
