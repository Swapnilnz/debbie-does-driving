import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {Checkbox} from "@mui/material";
import {useState} from "react";

function Restricted() {
    let [link, setLink] = useState('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/1c5a3088-f745-4b4c-88c6-19a2e5fb4337')

    function changeURL(event) {
        if (event.target.checked) {
            setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/29299fff-6466-472d-8c2f-2918ec352fdd');
        } else {
            setLink('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/1c5a3088-f745-4b4c-88c6-19a2e5fb4337');
        }
    }

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
                        <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                        </Typography>

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
                        <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                            ex
                            explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                            doloremque incidunt quae sed veniam voluptatem.
                        </Typography>
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