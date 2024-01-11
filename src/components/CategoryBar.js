import Stack from '@mui/material/Stack';
import CategoryButton from './Button/CategoryButton';

const CategoryBar = (category) => {

    const getColor = (currentCategory) => {
        return category.category === currentCategory ? 'selected' : 'default';
    };

    return (
        <Stack spacing={3} direction='column'>
            <CategoryButton category='국물류' color={getColor('soup')} />
            <CategoryButton category='안주류' color={getColor('snack')} />
            <CategoryButton category='주류' color={getColor('drink')} />
            <CategoryButton category='직원호출' color={getColor('call')} />
        </Stack>
    );
};

export default CategoryBar;
