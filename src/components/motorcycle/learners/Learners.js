import '../../../css/home/MotorcycleLessons.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {forwardRef, useState} from "react";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {motorcycleLearnersLarge} from "../../../utilities/text";
import Gear from "./Gear";
import Location from "./Location";
import BHSTOverview from "./BHSTOverview";
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useTheme} from '@mui/material/styles';
import useMediaQueryMui from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";
import BookButton from "../../BookButton";
import {Link} from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Learners() {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQueryMui(theme.breakpoints.down('md'));

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="mc-section is-flex is-flex-direction-column pb-5">
            <div className="has-text-weight-bold has-text-white page-header">
                LEARNERS
            </div>
            <div className="home-section-subtitle">
                · the starting line ·
            </div>
            <div className="mc-section-body">
                <Card className="mc-card-wrapper is-flex">
                    <CardContent
                        className="mot-lesson-card-body is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            LESSON
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$100</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p mot-location-group mb-3">
                            <AccessTimeTwoToneIcon/>
                            1 hour
                        </Typography>
                        <TabContext value={value1}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange1} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="Gear" value="2"/>
                                    <Tab label="Location" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1" className={'mot-tab-panel'}>

                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {motorcycleLearnersLarge}
                                </Typography>
                            </TabPanel>
                            <TabPanel value="2" className={'mot-tab-panel'}>
                                <Gear/>

                            </TabPanel>
                            <TabPanel value="3" className={'mot-tab-panel'}>
                                <Location/>
                            </TabPanel>
                        </TabContext>
                        <BookButton
                            link={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/74a0bf09-35e0-4395-b030-b28cab734429?source=settings'}/>
                    </CardContent>
                </Card>
                <Card className="mc-card-wrapper is-flex">
                    <CardContent
                        className="mot-lesson-card-body is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            BHST
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$100</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                            <AccessTimeTwoToneIcon/>
                            1 hour - SATURDAYS ONLY
                        </Typography>
                        <TabContext value={value2}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange2} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="Gear" value="2"/>
                                    <Tab label="Location" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1" className={'mot-tab-panel'}>
                                <BHSTOverview/>
                            </TabPanel>
                            <TabPanel value="2" className={'mot-tab-panel'}>
                                <Gear/>
                            </TabPanel>
                            <TabPanel value="3" className={'mot-tab-panel'}>
                                <Location/>
                            </TabPanel>
                        </TabContext>

                        {/*<Button variant="contained" size={'large'}*/}
                        {/*        className="mt-5 orange-button has-text-weight-bold center-mobile"*/}
                        {/*        onClick={handleClickOpen}*/}
                        {/*        startIcon={<EventTwoToneIcon/>}>*/}
                        {/*    Book*/}
                        {/*</Button>*/}
                        <Link to={"/contact"}>
                            <Button variant="contained" size={'large'}
                                    disabled={false}
                                    style={{zIndex: 2}}
                                    className="orange-button has-text-weight-bold"
                                    startIcon={<ContactMailIcon/>}>
                                Contact
                            </Button>
                        </Link>
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
                        BHST is only available on Saturdays, please do not book on other days!
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={'tc-title'}>
                    <Button autoFocus onClick={handleClose} className={'tc-buttons'}>
                        Cancel
                    </Button>
                    <Button
                        href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/259109e8-aa54-4cbe-b355-080b5e1028f4'}
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

export default Learners;