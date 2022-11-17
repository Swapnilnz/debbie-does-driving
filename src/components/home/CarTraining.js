import {HashLink as Link} from "react-router-hash-link";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {carTrainingFullSmall, carTrainingRestrictedSmall} from "../../utilities/text";

function CarTraining() {
    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white home-section-header">
                CAR TRAINING
            </div>
            <div className="home-section-subtitle mb-5">
                · get prepared ·
            </div>
            <div className="is-flex mot-lesson-body">
                <Link to="/car#training">
                    <Card className="mot-lesson-card-wrapper">
                        <CardActionArea>
                            <CardContent className="mot-lesson-card-body">
                                <div className="mot-lesson-card-gradient-background"/>
                                <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                            component="div"
                                            letterSpacing={2} zIndex={2} position={"relative"}>
                                    RESTRICTED
                                </Typography>
                                {/*<Typography component="div" gutterBottom fontWeight={"bold"} align={"center"}*/}
                                {/*            variant="h6"*/}
                                {/*            letterSpacing={2} zIndex={2}>*/}
                                {/*    <p className={"price-tag-purple"}>$100</p>*/}
                                {/*</Typography>*/}
                                <Typography variant="body2" zIndex={2} position={"relative"}
                                            className="mot-lesson-card-p">
                                    {carTrainingRestrictedSmall}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/car#training">
                    <Card className="mot-lesson-card-wrapper">
                        <CardActionArea>
                            <CardContent className="mot-lesson-card-body">
                                <div className="mot-lesson-card-gradient-background"/>
                                <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5"
                                            component="div"
                                            letterSpacing={2} zIndex={2} position={"relative"}>
                                    FULL
                                </Typography>
                                <Typography variant="body2" zIndex={2} position={"relative"}
                                            className="mot-lesson-card-p">
                                    {carTrainingFullSmall}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        </div>

    )
}

export default CarTraining;