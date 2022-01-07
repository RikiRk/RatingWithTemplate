import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 1,
    width: 220,
    marginLeft: 55,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
    }
}));

function FacebookCircularProgress(props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <LinearProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${linearProgressClasses.circle}`]: {
                        strokeLinecap: 'round'
                    }
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    //   const Item = styled(Paper)(({ theme }) => ({
    //   ...theme.typography.body2,
    //   padding: theme.spacing(),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // }));

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function Tabss() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Perfomence" {...a11yProps(0)} />
                    <Tab label="Rating" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Perfomence
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3 fontsize="inherit" aria-label="Perfomence">
                    <b>How is my chatbot doing?</b>
                </h3>
                <h6> this analytics are based on what customer saying.</h6>

                <Box sx={{ flexGrow: 1, marginLeft: 55, marginTop: 12 }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            width: 900,
                            height: 230,
                            position: 'relative',
                            backgroundColor: 'white',
                            borderRadius: 5,
                            boxShadow: 2,
                            right: 90,
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }}
                    >
                        {/* <Item  sx ={{ 
             width: 900,
              height: 230,
              position: "relative",
              backgroundColor: 'white',
              borderRadius:5,
              boxShadow: 2,
              right:90,
              '&:hover': {
                backgroundColor: 'white',
              }}}> */}
                        <Grid sx={{ marginTop: 6 }}>
                            <Grid container sx={{ color: 'text.primary' }}>
                                <Grid>
                                    <StarIcon sx={{ color: 'yellow', top: 60, bottom: 2, marginLeft: 45 }} />5
                                </Grid>
                                <FacebookCircularProgress />
                                <br />
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={50}
                                    sx={{ marginLeft: 50, position: 'absolute', top: 56 }}
                                />
                            </Grid>
                            <Grid container>
                                <StarIcon sx={{ color: 'yellow', top: 60, bottom: 4, marginLeft: 45 }} />4
                                <FacebookCircularProgress />
                                <br />
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={50}
                                    sx={{ position: 'absolute', marginLeft: 50, top: 83 }}
                                />
                            </Grid>
                            <Grid container>
                                <StarIcon sx={{ color: 'yellow', top: 60, bottom: 4, marginLeft: 45 }} />3
                                <FacebookCircularProgress />
                                <br />
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={50}
                                    sx={{ position: 'absolute', marginLeft: 50, top: 110 }}
                                />
                            </Grid>
                            <Grid container>
                                <StarIcon sx={{ color: 'yellow', top: 60, bottom: 4, marginLeft: 45 }} />2
                                <FacebookCircularProgress />
                                <br />
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={50}
                                    sx={{ position: 'absolute', marginLeft: 50, top: 133 }}
                                />
                            </Grid>
                            <Grid container>
                                <StarIcon sx={{ color: 'yellow', top: 60, marginLeft: 45 }} />1
                                <FacebookCircularProgress />
                                <br />
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={50}
                                    sx={{ position: 'absolute', marginLeft: 50, top: 155 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Typography sx={{ marginRight: 55, position: 'absolute', top: 80, left: 92 }}>
                                <h6>
                                    <b>Avaerage rating</b>
                                </h6>
                            </Typography>
                        </Grid>

                        {/* </Item> */}
                    </Grid>
                </Box>
            </TabPanel>
        </Box>
    );
}
