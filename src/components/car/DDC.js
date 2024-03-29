import '../../css/car/DDC.css';
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import DDCImage from "../../assets/ddc.png";
import PriceSVG from '../../assets/239.svg';
import PricePNG from '../../assets/239.png';
import {useMediaQuery} from "react-responsive";
import useMediaQueryMui from '@mui/material/useMediaQuery';
import {forwardRef, useState} from "react";
import {useTheme} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TermsAndConditions from "./TermsAndConditions";
import {Chip, Typography} from "@mui/material";
import Slide from '@mui/material/Slide';
import {ddc} from "../../utilities/text";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DDC() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQueryMui(theme.breakpoints.down('md'));
    const Price = isDesktopOrLaptop ? PriceSVG : PricePNG;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="ddc-wrapper">
            {isDesktopOrLaptop &&
                <div
                    className="p-4 is-flex is-justify-content-center home-image-wrapper retraining-image has-text-centered-mobile">
                    <img width={'600'} loading={"lazy"} src={DDCImage} alt={"car"}/>
                </div>
            }
            <div
                className="car-ddc-body pt-0 pb-4 px-4 ">

                <div className="has-text-weight-bold has-text-white home-section-header has-text-centered">
                    <p>
                        DEFENSIVE DRIVING
                    </p>
                </div>
                <div className="home-section-subtitle mb-5">
                    · tailgating is not the answer ·
                </div>
                <br/>
                <div className="has-text-white" style={{whiteSpace: 'pre-wrap'}}>
                    <div className="car-price-image has-text-centered-mobile">
                        <img loading={'lazy'} src={Price} height={150} width={150} alt={'price 229'}/>
                    </div>
                    <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1} fontSize={'medium'}
                                className="mot-lesson-card-p car-ddc-location is-flex is-flex-direction-column is-align-items-flex-start gap-1 mb-3 ">
                        <a target={'_blank'}
                           href={'https://g.page/adventure-southland?share'} rel="noreferrer" className={"full-width"}>
                            <Chip icon={<LocationOnIcon style={{color: "white"}}/>}
                                  label="Invercargill | Adventure Southland"
                                  target={'_blank'}
                                  href={'https://g.page/adventure-southland?share'} rel="noreferrer"
                                  className={"first-chip full-width"}
                                  clickable/>
                        </a>
                        <div className={'gore-chip-wrapper'}>
                            <a target={'_blank'}
                            href={'https://goo.gl/maps/vUC8wZsexdre28Pa6'} rel="noreferrer">
                                <Chip icon={<LocationOnIcon/>} label="Gore | Mataura Community Centre" target={'_blank'}
                                    href={'https://goo.gl/maps/vUC8wZsexdre28Pa6'} rel="noreferrer" color={"secondary"}
                                    clickable/>
                            </a>
                            <a target={'_blank'}
                            href={'https://goo.gl/maps/iaPD4mfFfK4yg7Sp7'} 
                            rel="noreferrer">
                                <Chip icon={<LocationOnIcon/>} label="Gore | Menzies College Library" target={'_blank'}
                                    href={'https://goo.gl/maps/iaPD4mfFfK4yg7Sp7'} rel="noreferrer" color={"secondary"}
                                    clickable/>
                            </a>

                        </div>

                        <p className={'is-flex is-align-items-center is-justify-content-center gap-1 full-width'}>
                            <AccessTimeTwoToneIcon
                                fontSize={'medium'}/>
                            4 x 2 hour</p>
                    </Typography>
                    <Typography className="ddc-text">
                        {ddc.body}
                        <br/>
                        <em>Note: please book only one time slot, this signs you up for 4 x 2-hour sessions.</em>
                    </Typography>
                </div>
                <Button variant="contained" size={'large'}
                        className="mt-5 orange-button has-text-weight-bold center-mobile"
                        onClick={handleClickOpen}
                        startIcon={<EventTwoToneIcon/>}>
                    Book
                </Button>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" className={'tc-title'}>
                    DDC Terms & Conditions
                </DialogTitle>
                <DialogContent className={'tc-title'}>
                    <DialogContentText>
                        {TermsAndConditions.map((message, index) => {
                            return (
                                <Typography variant="body2" zIndex={2} position={"relative"}
                                            className="py-2 has-text-white">
                                    <strong className={'has-text-white'}>{index + 1}</strong>
                                    . {message}
                                </Typography>
                            )
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={'tc-title'}>
                    <Button autoFocus onClick={handleClose} className={'tc-buttons'}>
                        Disagree
                    </Button>
                    <Button
                        href={'https://debbiedoesdriving.corsizio.com/'}
                        onClick={handleClose}
                        target={"_blank"}
                        autoFocus className={'tc-buttons'}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DDC;