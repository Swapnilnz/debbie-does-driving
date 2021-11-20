import '../../css/home/MotorcycleLessons.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';


function MotorcycleLessons() {
    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white mt-5 home-section-header">
                MOTORCYCLE TRAINING
            </div>
            <div className="home-section-subtitle mb-5">
                · FROM START TO FINISH ·
            </div>
            <div className="is-flex mot-lesson-body">
                <Card className="mot-lesson-card-wrapper">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                            alt="learners"
                        />
                        <CardContent className="mot-lesson-card-body">
                            <div className="mot-lesson-card-gradient-background"/>
                            <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5" component="div"
                                        letterSpacing={2} zIndex={2} position={"relative"}>
                                LEARNERS - BHS
                            </Typography>
                            <Typography variant="body2" zIndex={2} position={"relative"} className="mot-lesson-card-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum ex
                                explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                                doloremque incidunt quae sed veniam voluptatem.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="mot-lesson-card-wrapper">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                            alt="learners"
                        />
                        <CardContent className="mot-lesson-card-body">
                            <div className="mot-lesson-card-gradient-background"/>
                            <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5" component="div"
                                        letterSpacing={2} zIndex={2} position={"relative"}>
                                RESTRICTED - CBTA
                            </Typography>
                            <Typography variant="body2" zIndex={2} position={"relative"} className="mot-lesson-card-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum ex
                                explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                                doloremque incidunt quae sed veniam voluptatem.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="mot-lesson-card-wrapper">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                            alt="learners"
                        />
                        <CardContent className="mot-lesson-card-body">
                            <div className="mot-lesson-card-gradient-background"/>
                            <Typography gutterBottom fontWeight={"bold"} align={"center"} variant="h5" component="div"
                                        letterSpacing={2} zIndex={2} position={"relative"}>
                                FULL - CBTA
                            </Typography>
                            <Typography variant="body2" zIndex={2} position={"relative"} className="mot-lesson-card-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur eum ex
                                explicabo, hic ipsum iure magni natus, nemo odit perferendis similique. Cupiditate
                                doloremque incidunt quae sed veniam voluptatem.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>
        </div>
    )
}

export default MotorcycleLessons;