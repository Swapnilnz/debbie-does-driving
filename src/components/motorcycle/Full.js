import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {Checkbox} from "@mui/material";
import {useState} from "react";

function Full() {
    let [link, setLink] = useState('https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/f1a24c23-ad4d-4087-8f9a-0da31b6a28c9')

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
                                <Checkbox style={{zIndex: 2, color: 'white'}} className={'p-0 mr-1'}
                                          onChange={changeURL} size="small"/>
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

export default Full;