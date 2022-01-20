import '../../css/car/DDC.css';
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import DDCImage from "../../assets/ddc.png";
import Price from '../../assets/229.svg';
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
import {Typography} from "@mui/material";
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DDC() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQueryMui(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="ddc-wrapper">
            {isDesktopOrLaptop &&
                <div className="p-4 is-flex is-justify-content-center home-image-wrapper">
                    <img className="ddc-image" loading={"lazy"} src={DDCImage} alt={"car"}/>
                </div>

            }
            <div className="car-ddc-body is-align-items-start pt-0 pb-4 px-4 has-text-left has-text-centered-mobile">

                <div className="has-text-weight-bold has-text-white home-section-header full-width">
                    <p>
                        DEFENSIVE DRIVING
                    </p>
                </div>
                <div className="home-section-subtitle mb-5">
                    · tailgating is not the answer ·
                </div>
                <div className="has-text-white mt-5">
                    <div className="car-price-image">
                        <img loading={'lazy'} src={Price} height={150} width={150} alt={'price 229'}/>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequatur earum eveniet
                    fugit, illo impedit in incidunt ipsum modi molestiae necessitatibus provident quaerat quisquam
                    saepe, sapiente temporibus ut, veniam!
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores consequuntur
                    dolore dolores esse explicabo inventore iure laudantium, maxime neque nobis quo recusandae, rem ut
                    vel veritatis voluptas voluptate!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequatur earum eveniet
                    fugit, illo impedit in incidunt ipsum modi molestiae necessitatibus provident quaerat quisquam
                    saepe, sapiente temporibus ut, veniam!
                </div>
                <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                    // href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/class'}
                    // target={'_blank'}
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
                        href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/class'}
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