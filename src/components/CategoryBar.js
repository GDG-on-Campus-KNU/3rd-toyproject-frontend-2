import Stack from '@mui/material/Stack';
import CategoryButton from './Button/CategoryButton';

const CategoryBar = (category) => {
    const getColor = (currentCategory) => {
        return category.category === currentCategory ? 'selected' : 'default';
    };

    return (
        <Stack spacing={2.5} direction="column">
            <CategoryButton page="soup" category="국물류" color={getColor('soup')} />
            <CategoryButton page="snack" category="안주류" color={getColor('snack')} />
            <CategoryButton page="drink" category="주류" color={getColor('drink')} />
            <CategoryButton page="call" category="직원호출" color={getColor('call')} />
        </Stack>
    );
};

export default CategoryBar;
