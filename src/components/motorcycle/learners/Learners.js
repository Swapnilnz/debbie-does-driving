import '../../../css/home/MotorcycleLessons.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {useState} from "react";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {motorcycleLearnersLarge} from "../../../utilities/text";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Gear from "./Gear";
import Location from "./Location";
import BHSTOverview from "./BHSTOverview";
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

function Learners() {
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
                                <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                            className="mot-lesson-card-p mot-location-group mb-3">
                                    <LocationOnIcon/>
                                    <a className={'address-line-hover'} target={'_blank'}
                                       href={'https://www.google.com/search?q=pgg%20wrights on%20woolstore%2C%20invercargill&hl=en&sxsrf=APq-WBtxupY2iZ3gUnVUWvi6vH-lTiCaig:1643609104391&source=hp&ei=DHz3YeH-NaqJr7wPm8GoiAc&iflsig=AHkkrS4AAAAAYfeKHJWeK2M2flxbRWGaJYNPY5tpZ1JM&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWLQGYN8RaAFwAHgBgAEAiAEAkgEAmAEAoAECoAEBsAEK&sclient=gws-wiz&tbs=lf:1,lf_ui:4&tbm=lcl&rflfq=1&num=10&rldimm=7448212313340177482&lqi=CiVwZ2cgd3JpZ2h0c29uIHdvb2xzdG9yZSwgaW52ZXJjYXJnaWxsIgOIAQFItbiRno6rgIAIWjIQABABEAIYABgBGAMiJHBnZyB3cmlnaHRzb24gd29vbHN0b3JlIGludmVyY2FyZ2lsbJIBFGFncmljdWx0dXJhbF9zZXJ2aWNlqgEfEAEqGyIXcGdnIHdyaWdodHNvbiB3b29sc3RvcmUoAA&ved=2ahUKEwij48OGqdv1AhXrxDgGHae-CRMQvS56BAgDECM&rlst=f#rlfi=hd:;si:7448212313340177482,l,CiVwZ2cgd3JpZ2h0c29uIHdvb2xzdG9yZSwgaW52ZXJjYXJnaWxsIgOIAQFItbiRno6rgIAIWjIQABABEAIYABgBGAMiJHBnZyB3cmlnaHRzb24gd29vbHN0b3JlIGludmVyY2FyZ2lsbJIBFGFncmljdWx0dXJhbF9zZXJ2aWNlqgEfEAEqGyIXcGdnIHdyaWdodHNvbiB3b29sc3RvcmUoAA;mv:[[-46.3977167,168.34684959999998],[-46.4042799,168.3421329]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4'}
                                       rel="noreferrer">
                                        PGG Wrightson Woolstore</a>
                                    <AccessTimeTwoToneIcon className={'ml-3'}/>
                                    1 hour
                                </Typography>
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

                        <Button variant="contained" size={'large'} style={{zIndex: 2}}
                                className="orange-button mt-4 mb-5 has-text-weight-bold"
                                href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/74a0bf09-35e0-4395-b030-b28cab734429'}
                                target={"_blank"}
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
                            BHST
                        </Typography>
                        <Typography component="div" gutterBottom fontWeight={"bold"} align={"center"} variant="h6"
                                    letterSpacing={2} zIndex={2}>
                            <p className={"price-tag-purple"}>$100</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
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
                        <Button variant="contained" size={'large'} style={{zIndex: 2}}
                                href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/259109e8-aa54-4cbe-b355-080b5e1028f4'}
                                target={"_blank"}
                                className="orange-button mt-4 mb-5 has-text-weight-bold"
                                startIcon={<EventTwoToneIcon/>}>
                            Book
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Learners;