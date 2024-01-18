import { Button, Grid } from '@mui/material';
import { callCardStyle } from '../styles/CallPageStyle';

const CardContainer = () => {
    const onClickHandler = (name) => {
        console.log(`${name}을(를) 호출했습니다.`);
    };

    return (
        <Grid container xs={13} direction="row">
            <Grid item xs={3}>
                <Button
                    sx={callCardStyle}
                    id="1"
                    name="숟가락"
                    variant="outlined"
                    onClick={() => onClickHandler('숟가락')}
                >
                    숟가락
                </Button>
                <Button
                    sx={callCardStyle}
                    id="5"
                    name="물티슈"
                    variant="outlined"
                    onClick={() => onClickHandler('물티슈')}
                >
                    물티슈
                </Button>
                <Button
                    sx={callCardStyle}
                    id="9"
                    name="양념치킨소스"
                    variant="outlined"
                    onClick={() => onClickHandler('양념치킨소스')}
                >
                    양념치킨 소스
                </Button>
                <Button
                    sx={callCardStyle}
                    id="13"
                    name="기본안주"
                    variant="outlined"
                    onClick={() => onClickHandler('기본안주')}
                >
                    기본안주
                </Button>
            </Grid>

            <Grid item xs={3}>
                <Button
                    sx={callCardStyle}
                    id="2"
                    name="젓가락"
                    variant="outlined"
                    onClick={() => onClickHandler('젓가락')}
                >
                    젓가락
                </Button>
                <Button sx={callCardStyle} id="6" name="냅킨" variant="outlined" onClick={() => onClickHandler('냅킨')}>
                    냅킨
                </Button>
                <Button
                    sx={callCardStyle}
                    id="10"
                    name="건어물소스"
                    variant="outlined"
                    onClick={() => onClickHandler('건어물소스')}
                >
                    건어물 소스
                </Button>
                <Button sx={callCardStyle} id="14" name="물" variant="outlined" onClick={() => onClickHandler('뮬')}>
                    물
                </Button>
            </Grid>

            <Grid item xs={3}>
                <Button sx={callCardStyle} id="3" name="집게" variant="outlined" onClick={() => onClickHandler('집게')}>
                    집게
                </Button>
                <Button
                    sx={callCardStyle}
                    id="7"
                    name="소주잔"
                    variant="outlined"
                    onClick={() => onClickHandler('소주잔')}
                >
                    소주잔
                </Button>
                <Button
                    sx={callCardStyle}
                    id="11"
                    name="간장소스"
                    variant="outlined"
                    onClick={() => onClickHandler('간장소스')}
                >
                    간장소스
                </Button>
                <Button
                    sx={callCardStyle}
                    id="15"
                    name="얼음컵"
                    variant="outlined"
                    onClick={() => onClickHandler('얼음컵')}
                >
                    얼음컵
                </Button>
            </Grid>

            <Grid item xs={3}>
                <Button sx={callCardStyle} id="4" name="가위" variant="outlined" onClick={() => onClickHandler('가위')}>
                    가위
                </Button>
                <Button
                    sx={callCardStyle}
                    id="8"
                    name="맥주잔"
                    variant="outlined"
                    onClick={() => onClickHandler('맥주잔')}
                >
                    맥주잔
                </Button>
                <Button
                    sx={callCardStyle}
                    id="12"
                    name="마요네즈"
                    variant="outlined"
                    onClick={() => onClickHandler('마요네즈')}
                >
                    마요네즈
                </Button>
                <Button
                    sx={callCardStyle}
                    id="16"
                    name="앞접시"
                    variant="outlined"
                    onClick={() => onClickHandler('앞접시')}
                >
                    앞접시
                </Button>
            </Grid>
        </Grid>
    );
};

export default CardContainer;
