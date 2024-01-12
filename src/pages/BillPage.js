import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import './BackgroundColor.css';

import tag from '../assets/tag.png';

const billBoxStyle = {
    bgcolor: '#ffffff',
    height: '77vh',
    borderRadius: '15px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
};

const titleBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    width: '100%',
};

const closeButtonStyle = {
    borderRadius: '50px',
    bgcolor: '#000000',
    '&:hover': { bgcolor: '#808080' },
    marginLeft: 'auto',
};

const numButtonStyle = {
    borderRadius: '50px',
    bgcolor: '#000000',
    '&:hover': { bgcolor: '#808080' },
};

const tagImgStyle = {
    width: '50px',
    height: '50px',
    marginRight: '20px',
};

const h4Style = {
    color: '#ffc700',
    margin: 5,
    fontWeight: 'bold',
};

const h5Style = {
    color: '#ffc700',
    margin: 5,
    fontWeight: 'bold',
    marginLeft: 'auto',
};

const line1Style = {
    borderTop: '5px solid #ffc700',
    width: '100%',
    marginY: '10px',
};

const line2Style = {
    borderTop: '1px solid #000000',
    width: '100%',
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '7fr 2fr 1fr 2fr',
    gap: '10px',
};

const textCellStyle = {
    padding: '20px',
};

const paperBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    border: '1px solid #000',
    borderRadius: '50px',
    padding: '5px',
    width: '100%',
    marginBottom: '15px',
    marginTop: '15px',
};

const BillPage = () => {
    return (
        // <Container fixed sx={{ m: 10 }}>
        <Container maxWidth="lg">
            <Grid container marginX={2}>
                <Grid item xs={10} marginX={2}>
                    <Box sx={billBoxStyle}>
                        <Box sx={titleBoxStyle}>
                            <img src={tag} style={tagImgStyle} />
                            <Typography variant="h4" style={h4Style}>
                                계산서
                            </Typography>
                            <Button variant="contained" sx={closeButtonStyle}>
                                X 닫기
                            </Button>
                        </Box>
                        <Box sx={line1Style} />

                        <Paper elevation={0} sx={{ width: '100%', minHeight: '70%' }}>
                            <Box sx={gridContainerStyle}>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                        직화무뼈닭발
                                    </Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">23,000원</Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">1개</Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">23,000원</Typography>
                                </Box>
                            </Box>
                            <Box sx={line2Style} />

                            <Box sx={gridContainerStyle}>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                        순두부찌개
                                    </Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">12,000원</Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">1개</Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">12,000원</Typography>
                                </Box>
                            </Box>
                            <Box sx={line2Style} />

                            <Box sx={gridContainerStyle}>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                        참이슬
                                    </Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">5,000원</Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">2개</Typography>
                                </Box>
                                <Box sx={textCellStyle}>
                                    <Typography variant="body1">10,000원</Typography>
                                </Box>
                            </Box>
                            <Box sx={line2Style} />
                        </Paper>

                        <Box sx={line1Style} />

                        <Grid container spacing={2} sx={{ minHeight: '15%' }}>
                            <Grid item xs={8}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box sx={paperBoxStyle}>
                                        <Typography variant="body1" style={{ marginRight: '10px' }}>
                                            더치페이
                                        </Typography>
                                        <Button variant="contained" sx={numButtonStyle}>
                                            +
                                        </Button>
                                        <Typography variant="body1" style={{ margin: '0 10px' }}>
                                            3
                                        </Typography>
                                        <Button variant="contained" sx={numButtonStyle}>
                                            -
                                        </Button>
                                        <Typography variant="body1" style={{ marginLeft: '10px' }}>
                                            1인당 15,000원
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper elevation={0} sx={{ minHeight: '100% ', display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h5" style={h5Style}>
                                        합계 45,000원
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BillPage;
