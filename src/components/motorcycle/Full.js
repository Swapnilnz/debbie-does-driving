import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";

function Full() {
    return (
        <div className="mc-section is-flex is-flex-direction-column py-5">
            <div className="has-text-weight-bold has-text-white mt-2 mc-header">
                FULL
            </div>
            <div className="home-section-subtitle">
                · THE END OF THE ROAD ·
            </div>
            <div className="mc-section-body">
                <Card className="mc-card-wrapper">
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                        alt="learners training"
                    />
                    <CardContent className="mot-lesson-card-body">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            FULL LICENCE TRAINING
                        </Typography>
                        <Typography variant="body2" zIndex={2} position={"relative"}
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
                                className="orange-button mt-4 mb-5 has-text-weight-bold"
                                startIcon={<EventTwoToneIcon/>}>
                            Book
                        </Button>
                    </CardContent>
                </Card>
                <Card className="mc-card-wrapper">
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                        alt="learners training"
                    />
                    <CardContent className="mot-lesson-card-body">
                        <div className="mot-lesson-card-gradient-background"/>
                        <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                    component="div"
                                    letterSpacing={2} zIndex={2} position={"relative"}>
                            CBTA ASSESSMENT - FULL
                        </Typography>
                        <Typography variant="body2" zIndex={2} position={"relative"}
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

export default Full;