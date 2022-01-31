import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {Checkbox} from "@mui/material";
import {useState} from "react"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import {motorcycleRestrictedLarge} from "../../utilities/text";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Restricted() {
    let [link, setLink] = useState('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/1c5a3088-f745-4b4c-88c6-19a2e5fb4337')

    function changeURL(event) {
        if (event.target.checked) {
            setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/29299fff-6466-472d-8c2f-2918ec352fdd');
        } else {
            setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/1c5a3088-f745-4b4c-88c6-19a2e5fb4337');
        }
    }

    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };
    return (
        <div className="mc-section is-flex is-flex-direction-column pb-5">
            <div className="has-text-weight-bold has-text-white page-header">
                RESTRICTED
            </div>
            <div className="home-section-subtitle">
                · for the committed ·
            </div>
            <div className="mc-section-body">
                <Card className="mc-card-wrapper is-flex">
                    <CardContent
                        className="mot-lesson-card-body is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            6R - LESSON
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$150</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <TabContext value={value1}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange1} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className={'is-flex-grow-1'}/>
                                    <Tab label="What to bring" value="2" className={'is-flex-grow-1'}/>
                                    <Tab label="Next steps" value="3" className={'is-flex-grow-1'}/>
                                </TabList>
                            </Box>
                            <TabPanel value="1"
                                      className={'is-flex-grow-1 gap-1 is-flex is-flex-direction-column is-align-items-center'}>
                                <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p is-flex gap-1">
                                    <LocationOnIcon/>
                                    <a className={'address-line-hover'} target={'_blank'}
                                       href={'https://goo.gl/maps/bDPDBeu8NHiZs7zY9'} rel="noreferrer">
                                        82 Moore Road, Lorneville</a>
                                    <EventTwoToneIcon className={'ml-3'}/>
                                    1h 30m
                                </Typography>
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">
                                    {motorcycleRestrictedLarge}
                                </Typography>
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                        <Button variant="contained" size={'large'} style={{zIndex: 2}}
                                className="orange-button mt-6 mb-5 has-text-weight-bold"
                                href={''}
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
                            6R - CBTA
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$180</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <TabContext value={value2}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', zIndex: 2}}>
                                <TabList onChange={handleChange2} textColor="white"
                                         indicatorColor="secondary">
                                    <Tab label="Overview" value="1" className='tab-header'/>
                                    <Tab label="What to bring" value="2"/>
                                    <Tab label="Next steps" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1"
                                      className={'is-flex-grow-1 gap-1 is-flex is-flex-direction-column is-align-items-center'}>
                                <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p is-flex gap-1">
                                    <LocationOnIcon/>
                                    <a className={'address-line-hover'} target={'_blank'}
                                       href={'https://goo.gl/maps/bDPDBeu8NHiZs7zY9'} rel="noreferrer">
                                        82 Moore Road, Lorneville</a>
                                    <EventTwoToneIcon className={'ml-3'}/>
                                    1h 30m
                                </Typography>
                                <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p">

                                </Typography>
                            </TabPanel>
                            <TabPanel value="2" className={'is-flex-grow-1'}>Item Two</TabPanel>
                            <TabPanel value="3" className={'is-flex-grow-1'}>Item Three</TabPanel>
                        </TabContext>
                        <div className={'is-flex is-flex-direction-column gap-1 mt-6 mb-4'} style={{zIndex: 2}}>
                            <div className={'is-flex is-flex-direction-row is-align-items-center'}>
                                <Checkbox style={{zIndex: 2, color: 'white'}} onChange={changeURL}
                                          className={'p-0 mr-1'} size="small"/>
                                <p className={'mot-lesson-card-p has-text-weight-bold'}>I need a motorcycle (+$50)</p>
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

export default Restricted;