import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import {acap, carTrainingFull, carTrainingRestricted} from "../../utilities/text";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {useState} from "react";

function Training() {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');
    // const [link, setLink] = useState('');

    const restrictedLink = 'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/class/0de6cbfa-3a9b-48df-ae5f-ba7434254a1f'
    const fullLink = 'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/class/237c931b-be69-446e-8248-863a1b3289d1'

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    return (
        <div className="mc-section is-flex is-flex-direction-column pb-5">
            <div className="has-text-weight-bold has-text-white home-section-header has-text-centered">
                CAR TRAINING/PRACTICE ASSESSMENT
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
                                    {/*<Tab label="Open Road" value="3"/>*/}
                                </TabList>
                            </Box>
                            <TabPanel className={'mot-tab-panel'} value="1">
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
                            {/*<TabPanel className={'mot-tab-panel'} value="3">*/}
                            {/*    <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}*/}
                            {/*                className="mot-lesson-card-p">*/}
                            {/*        {openRoad}*/}
                            {/*    </Typography>*/}
                            {/*</TabPanel>*/}
                        </TabContext>
                        <Button variant="contained" size={'large'}
                                className="mt-5 orange-button has-text-weight-bold center-mobile"
                                startIcon={<EventTwoToneIcon/>}
                                href={restrictedLink}
                                target={'_blank'}
                        >
                            Book
                        </Button>
                        {/*<Button variant="contained" size={'large'}*/}
                        {/*        disabled={true}*/}
                        {/*        style={{zIndex: 2}}*/}
                        {/*        className="orange-button has-text-weight-bold"*/}
                        {/*        startIcon={<EventTwoToneIcon/>}>*/}
                        {/*    Book*/}
                        {/*</Button>*/}
                        {/*<Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}*/}
                        {/*            className="mot-lesson-card-p mt-1">*/}
                        {/*    Sorry, this is currently disabled, please contact Debbie*/}
                        {/*</Typography>*/}
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
                        <TabContext value={value2}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange2} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="ACAP" value="2"/>
                                    {/*<Tab label="Open Road" value="3"/>*/}
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
                            {/*<TabPanel className={'mot-tab-panel'} value="3">*/}
                            {/*    <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}*/}
                            {/*                className="mot-lesson-card-p">*/}
                            {/*        {openRoad}*/}
                            {/*    </Typography>*/}
                            {/*</TabPanel>*/}
                        </TabContext>
                        <Button variant="contained" size={'large'}
                                className="mt-5 orange-button has-text-weight-bold center-mobile"
                            // onClick={handleClickOpenFull}
                                startIcon={<EventTwoToneIcon/>}
                                href={fullLink}
                                target={'_blank'}
                        >
                            Book
                        </Button>
                        {/*<Button variant="contained" size={'large'}*/}
                        {/*        disabled={true}*/}
                        {/*        style={{zIndex: 2}}*/}
                        {/*        className="orange-button has-text-weight-bold"*/}
                        {/*        startIcon={<EventTwoToneIcon/>}>*/}
                        {/*    Book*/}
                        {/*</Button>*/}
                        {/*<Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}*/}
                        {/*            className="mot-lesson-card-p mt-1">*/}
                        {/*    Sorry, this is currently disabled, please contact Debbie*/}
                        {/*</Typography>*/}
                    </CardContent>
                </Card>
            </div>
            {/*<Dialog*/}
            {/*    fullScreen={fullScreen}*/}
            {/*    open={open}*/}
            {/*    TransitionComponent={Transition}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="responsive-dialog-title"*/}
            {/*>*/}

            {/*    <DialogContent className={'tc-title'}>*/}
            {/*        <DialogContentText color={'white'}>*/}
            {/*            Car training is only available Monday-Thursday, please do not book on other days!*/}
            {/*        </DialogContentText>*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions className={'tc-title'}>*/}
            {/*        <Button autoFocus onClick={handleClose} className={'tc-buttons'}>*/}
            {/*            Cancel*/}
            {/*        </Button>*/}
            {/*        <Button*/}
            {/*            href={link}*/}
            {/*            onClick={handleClose}*/}
            {/*            target={"_blank"}*/}
            {/*            autoFocus className={'tc-buttons'}>*/}
            {/*            Continue*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}
        </div>
    )
}

export default Training;