import '../../css/home/MotorcycleLessons.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import {HashLink as Link} from 'react-router-hash-link';
import {motorcycleFullSmall, motorcycleLearnersSmall, motorcycleRestrictedSmall} from "../../utilities/text";

// import {Alert} from "@mui/lab";


function MotorcycleLessons() {

    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white home-section-header has-text-centered px-2">
                {'Southland Otago Motorcycle Training (SOMT)'.toUpperCase()}
            </div>
            <div className="home-section-subtitle mb-5">
                · from start to finish ·
            </div>

            {/*<Alert severity="info">*/}
            {/*    Debbie is super pleased to announce she is now providing motorcycle training as a member of the <strong>Ornsby*/}
            {/*    Motorcycle Training (OMT)</strong> team in Dunedin and Invercargill.*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    For all your Motorcycle Training & Licensing needs, please contact OMT – phone: 03 9808933 / 0508 ORNSBY*/}
            {/*    (676 729) OR website: <a target={"_blank"} rel="noreferrer"*/}
            {/*                             href={"https://www.motorcycletraining.co.nz"}>www.motorcycletraining.co.nz</a>*/}
            {/*</Alert>*/}


            <div className={"is-flex is-flex-direction-column is-align-items-center"}>
                <Typography className="retraining-text mb-5">
                    Debbie is an experienced and highly skilled motorcycle training instructor based in Invercargill,
                    New Zealand. With her passion for riding and extensive knowledge of motorcycle safety, Debbie offers
                    top-quality motorcycle training to riders of all skill levels. Her training programs are designed to
                    provide a safe and enjoyable learning experience, tailored to meet individual rider's needs,
                    covering basic skills, road awareness, and advanced techniques. Debbie's motorcycle training can
                    help riders improve their skills and gain confidence on the road, making them safer and more
                    confident riders.
                </Typography>
                <div className="is-flex mot-lesson-body">
                    <Link to="/motorcycle#learners">
                        <Card className="mot-lesson-card-wrapper">
                            <CardActionArea>
                                <CardContent className="mot-lesson-card-body">
                                    <div className="mot-lesson-card-gradient-background"/>
                                    <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                                component="div"
                                                letterSpacing={2} zIndex={2} position={"relative"}>
                                        LEARNERS - BHST
                                    </Typography>
                                    <Typography variant="body2" zIndex={2} position={"relative"}
                                                className="mot-lesson-card-p">
                                        {motorcycleLearnersSmall}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                    <Link to="/motorcycle#restricted">
                        <Card className="mot-lesson-card-wrapper">
                            <CardActionArea>
                                <CardContent className="mot-lesson-card-body">
                                    <div className="mot-lesson-card-gradient-background"/>
                                    <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                                component="div"
                                                letterSpacing={2} zIndex={2} position={"relative"}>
                                        RESTRICTED - CBTA
                                    </Typography>
                                    <Typography variant="body2" zIndex={2} position={"relative"}
                                                className="mot-lesson-card-p">
                                        {motorcycleRestrictedSmall}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                    <Link to="/motorcycle#full">
                        <Card className="mot-lesson-card-wrapper">
                            <CardActionArea>
                                <CardContent className="mot-lesson-card-body">
                                    <div className="mot-lesson-card-gradient-background"/>
                                    <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                                component="div"
                                                letterSpacing={2} zIndex={2} position={"relative"}>
                                        FULL - CBTA
                                    </Typography>
                                    <Typography variant="body2" zIndex={2} position={"relative"}
                                                className="mot-lesson-card-p">
                                        {motorcycleFullSmall}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MotorcycleLessons;