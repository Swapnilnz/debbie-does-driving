import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";

function Training() {
    return (
        <div className="mc-section is-flex is-flex-direction-column pb-5">
            <div className="has-text-weight-bold has-text-white page-header">
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
                            <p className={"price-tag-purple"}>$70</p>
                        </Typography>
                        <hr className={'full-width my-4 card-hr'}/>
                        <Typography letterSpacing={1} zIndex={2} className={'pb-2'}>
                            <em>Note: must have 3 months' driving experience on learners</em>
                        </Typography>
                        <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                                    className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                            <LocationOnIcon/>
                            <a className={'address-line-hover'} target={'_blank'}
                               href={'https://g.page/vtnz-invercargill?share'} rel="noreferrer">
                                VTNZ Mersey St Invercargill</a>
                            <AccessTimeTwoToneIcon className={'ml-3'}/>
                            1 hour
                        </Typography>
                        <Typography variant="body2" zIndex={2} position={"relative"}
                                    className="mot-lesson-card-p" flexGrow={1}>
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
                                href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/b17c1493-56ed-4da8-8336-08bf8adecec6'}
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
                        <Typography variant="body2" zIndex={2} position={"relative"}
                                    className="mot-lesson-card-p" flexGrow={1}>
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
                        </Typography>
                        <Button variant="contained" size={'large'} style={{zIndex: 2}}
                                className="orange-button mt-6 mb-5 has-text-weight-bold"
                                href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/d8a678b8-6284-488f-9def-66392c66cacc'}
                                target={'_blank'}
                                startIcon={<EventTwoToneIcon/>}>
                            Book
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}

export default Training;