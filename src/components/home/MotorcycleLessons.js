import '../../css/home/MotorcycleLessons.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import {HashLink as Link} from 'react-router-hash-link';


function MotorcycleLessons() {

    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white mt-5 home-section-header">
                MOTORCYCLE TRAINING
            </div>
            <div className="home-section-subtitle mb-5">
                · from start to finish ·
            </div>
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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                                    ex
                                    explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                                    doloremque incidunt quae sed veniam voluptatem.
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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                                    ex
                                    explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                                    doloremque incidunt quae sed veniam voluptatem.
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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum
                                    ex
                                    explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                                    doloremque incidunt quae sed veniam voluptatem.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        </div>
    )
}

export default MotorcycleLessons;