import '../../css/home/MotorcycleLessons.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";

function Learners() {
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                        </Typography>
                        <Button variant="contained" size={'large'} style={{zIndex: 2}}
                                href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/259109e8-aa54-4cbe-b355-080b5e1028f4'}
                                target={"_blank"}
                                className="orange-button mt-6 mb-5 has-text-weight-bold"
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