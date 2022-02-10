import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {Checkbox} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {fullCBTA, motorcycleFullLarge} from "../../utilities/text";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import Gear from "./restricted/Gear";
import NZTAGuide from "./NZTAGuide";

function Full() {
    let [link, setLink] = useState('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/f1a24c23-ad4d-4087-8f9a-0da31b6a28c9')
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    function changeURL(event) {
        if (event.target.checked) {
            setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/0b3b9f80-b2c5-416e-9369-0c7112e8a164');
        } else {
            setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/f1a24c23-ad4d-4087-8f9a-0da31b6a28c9');
        }
    }

    return (
        <div className="mc-section is-flex is-flex-direction-column pb-5">
            <div className="has-text-weight-bold has-text-white page-header">
                FULL
            </div>
            <div className="home-section-subtitle">
                · the end of the road ·
            </div>
            <div className="mc-section-body">
                <Card className="mc-card-wrapper is-flex">
                    <CardContent
                        className="mot-lesson-card-body is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            6F - LESSON
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>100</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <TabContext value={value1}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange1} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="Gear" value="2"/>
                                </TabList>
                            </Box>
                            <TabPanel className={'mot-tab-panel'} value="1">
                                <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p is-flex gap-1  is-justify-content-center mb-3">
                                    <LocationOnIcon/>
                                    <a className={'address-line-hover'} target={'_blank'}
                                       href={'https://goo.gl/maps/bDPDBeu8NHiZs7zY9'} rel="noreferrer">
                                        82 Moore Road, Lorneville</a>
                                    <AccessTimeTwoToneIcon className={'ml-3'}/>
                                    1 hour
                                </Typography>
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {motorcycleFullLarge}
                                </Typography>
                            </TabPanel>
                            <TabPanel value="2" className={'mot-tab-panel'}>
                                <Gear/>
                            </TabPanel>
                        </TabContext>

                        <Button variant="contained" size={'large'} style={{zIndex: 2}}
                                className="orange-button mt-4 mb-5 has-text-weight-bold"
                                href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/2542e81c-1278-45e2-864c-1da93d38f8d4'}
                                target={'_blank'}
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
                            6F - CBTA
                        </Typography>
                        <div className='is-flex is-flex-direction-row gap-1'>
                            <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                        letterSpacing={2} zIndex={2}>
                                <p className={"price-tag-purple"}>$130</p>
                            </Typography>
                        </div>
                        <hr className={'full-width my-4 card-hr'}/>
                        <TabContext value={value2}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange2} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="Gear" value="2"/>
                                </TabList>
                            </Box>
                            <TabPanel className={'mot-tab-panel'} value="1">
                                <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                                    <LocationOnIcon/>
                                    <a className={'address-line-hover'} target={'_blank'}
                                       href={'https://goo.gl/maps/bDPDBeu8NHiZs7zY9'} rel="noreferrer">
                                        82 Moore Road, Lorneville</a>
                                    <AccessTimeTwoToneIcon className={'ml-3'}/>
                                    1 hour
                                </Typography>
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {fullCBTA}
                                    <NZTAGuide/>
                                </Typography>
                            </TabPanel>
                            <TabPanel className={'mot-tab-panel'} value="2">
                                <Gear/>
                            </TabPanel>
                        </TabContext>
                        <div className={'is-flex is-flex-direction-column gap-1 mt-4 mb-4'} style={{zIndex: 2}}>
                            <div className={'is-flex is-flex-direction-row is-align-items-center'}>
                                <Checkbox style={{zIndex: 2, color: 'white'}} className={'p-0 mr-1'}
                                          onChange={changeURL} size="small"/>
                                <p className={'mot-lesson-card-p has-text-weight-bold'}>Borrow a motorcycle (+$50)</p>
                            </div>
                            <Button variant="contained" size={'large'}
                                    style={{zIndex: 2}}
                                    href={link}
                                    target={'_blank'}
                                    className="orange-button has-text-weight-bold"
                                    startIcon={<EventTwoToneIcon/>}>
                                Book
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Full;