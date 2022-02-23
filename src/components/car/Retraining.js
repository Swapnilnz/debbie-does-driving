import {useMediaQuery} from "react-responsive";
import RetrainingImage from "../../assets/retraining.jpg";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import Price from '../../assets/195.svg';
import {Typography} from "@mui/material";
import {insight3} from "../../utilities/text";

function Retraining() {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});


    return (
        <div className="retraining-wrapper">
            {isDesktopOrLaptop &&
                <div
                    className="p-4 is-flex is-justify-content-center home-image-wrapper retraining-image has-text-centered-mobile">
                    <img loading={"lazy"} src={RetrainingImage} alt={"retraining"}/>
                </div>}
            <div className="retraining-body pt-0 pb-4 px-4">
                <div className="has-text-weight-bold has-text-white home-section-header has-text-centered">
                    DRIVER RETRAINING
                </div>
                <div className="home-section-subtitle mb-5">
                    · INSIGHT3 ·
                </div>
                <div className="has-text-white is-flex-grow-1">
                    <div className="car-price-image has-text-centered">
                        <img loading={'lazy'} src={Price} height={150} width={150} alt={'price 195'}/>
                    </div>
                    <Typography className="retraining-text is-flex-grow-1">
                        {insight3.body}
                    </Typography>
                </div>
                <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                        href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/f60ce61c-fb3e-4098-9a9b-2d06d550c294'}
                        target={'_blank'}
                        className="orange-button has-text-weight-bold mt-5" startIcon={<EventTwoToneIcon/>}>
                    Book
                </Button>
            </div>
        </div>
    );
}

export default Retraining;