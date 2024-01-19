import { Button, Grid, Typography } from '@mui/material';

import { buttonStyle1, buttonStyle2, gridStyle1, lineStyle } from '../styles/CallPageStyle';
import Minus from './Button/CallButton/Minus';
import Plus from './Button/CallButton/Plus';

const OrderContainer = () => {
    // const dispatch = useDispatch();
    // // const requestCheck = (id, name, mount) => {
    // //     axios.get('http://35.208.58.86:8080/api/customer/request', {
    // //         id: '1',
    // //         name: '숫가락',
    // //         amount: '1',
    // //     });
    // // };

    // const orderCounter = useSelector((state) => state.call.amount);
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     dispatch(setCounter(counter));
    // }, [dispatch, counter]);

    return (
        <Grid container flexDirection="column">
            <Grid item sx={gridStyle1} justifyContent="flex-end">
                <Typography sx={buttonStyle2}>아아아아</Typography>
                <Plus />
                <Typography sx={buttonStyle2}>1개</Typography>
                <Minus />
                <Button sx={buttonStyle1}>삭제</Button>
            </Grid>
            <Grid item>
                <Typography sx={lineStyle} alignContent="center" />
            </Grid>
        </Grid>
    );
};

export default OrderContainer;
