import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import {acap, carTrainingFull, carTrainingRestricted, openRoad} from "../../utilities/text";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {forwardRef, useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {useTheme} from "@mui/material/styles";
import useMediaQueryMui from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Training() {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');
    const [link, setLink] = useState('');

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQueryMui(theme.breakpoints.down('md'));

    const handleClickOpenRestricted = () => {
        setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/b17c1493-56ed-4da8-8336-08bf8adecec6');
        setOpen(true);
    };
    const handleClickOpenFull = () => {
        setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/d8a678b8-6284-488f-9def-66392c66cacc');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="mc-section is-flex is-flex-direction-column pb-5">
            <div className="has-text-weight-bold has-text-white home-section-header has-text-centered">
                CAR TRAINING
            </div>
            <div className="home-section-subtitle">
                · get prepared ·
            </div>
            <div className="mc-section-body">
                <Card className="mc-card-wrapper is-flex">
                    <CardContent
                        className="mot-lesson-card-body is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            RESTRICTED
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$100</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>

                        <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                            <LocationOnIcon/>
                            <a className={'address-line-hover'} target={'_blank'}
                               href={'https://g.page/vtnz-invercargill?share'} rel="noreferrer">
                                VTNZ Mersey St Invercargill</a>
                            <AccessTimeTwoToneIcon className={'ml-3'}/>
                            1h 30m
                        </Typography>

                        <TabContext value={value1}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange1} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="ACAP" value="2"/>
                                    <Tab label="Open Road" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel className={'mot-tab-panel'} value="1">
                                <Typography letterSpacing={1} zIndex={2} className={'pb-2'}>
                                    <em>Note: must have 3 months' driving experience on learners</em>
                                </Typography>
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {carTrainingRestricted}
                                </Typography>
                            </TabPanel>
                            <TabPanel className={'mot-tab-panel'} value="2">
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {acap}
                                </Typography>
                            </TabPanel>
                            <TabPanel className={'mot-tab-panel'} value="3">
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {openRoad}
                                </Typography>
                            </TabPanel>
                        </TabContext>
                        <Button variant="contained" size={'large'}
                                className="mt-5 orange-button has-text-weight-bold center-mobile"
                                onClick={handleClickOpenRestricted}
                                startIcon={<EventTwoToneIcon/>}>
                            Book
                        </Button>
                    </CardContent>
                </Card>
                <Card className="mc-card-wrapper is-flex">
                    <CardContent
                        className="mot-lesson-card-body is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            FULL
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$70</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                            <LocationOnIcon/>
                            <a className={'address-line-hover'} target={'_blank'}
                               href={'https://g.page/vtnz-invercargill?share'} rel="noreferrer">
                                VTNZ Mersey St Invercargill</a>
                            <AccessTimeTwoToneIcon className={'ml-3'}/>
                            1 hour
                        </Typography>
                        <TabContext value={value2}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange2} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="ACAP" value="2"/>
                                    <Tab label="Open Road" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel className={'mot-tab-panel'} value="1">

                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {carTrainingFull}
                                </Typography>
                            </TabPanel>
                            <TabPanel className={'mot-tab-panel'} value="2">
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {acap}
                                </Typography>
                            </TabPanel>
                            <TabPanel className={'mot-tab-panel'} value="3">
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {openRoad}
                                </Typography>
                            </TabPanel>
                        </TabContext>
                        <Button variant="contained" size={'large'}
                                className="mt-5 orange-button has-text-weight-bold center-mobile"
                                onClick={handleClickOpenFull}
                                startIcon={<EventTwoToneIcon/>}>
                            Book
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >

                <DialogContent className={'tc-title'}>
                    <DialogContentText color={'white'}>
                        Car training is only available Monday-Thursday, please do not book on other days!
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={'tc-title'}>
                    <Button autoFocus onClick={handleClose} className={'tc-buttons'}>
                        Cancel
                    </Button>
                    <Button
                        href={link}
                        onClick={handleClose}
                        target={"_blank"}
                        autoFocus className={'tc-buttons'}>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Training;