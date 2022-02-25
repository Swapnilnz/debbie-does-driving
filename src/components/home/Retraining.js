import '../../css/home/Retraining.css';
import RetrainingImage from "../../assets/retraining.jpg";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {useMediaQuery} from "react-responsive";
import {HashLink as Link} from 'react-router-hash-link';
import {insight3} from "../../utilities/text";
import {Typography} from "@mui/material";

function Retraining() {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});


    return (
        <div className="retraining-wrapper">
            {isDesktopOrLaptop &&
                <div className="p-4 is-flex is-justify-content-center home-image-wrapper retraining-image">
                    <img loading={"lazy"} src={RetrainingImage} alt={"retraining"} width={400}/>
                </div>}
            <div className="retraining-body pt-0 pb-4 px-4">
                <div className="has-text-weight-bold has-text-white home-section-header has-text-centered">
                    DRIVER RETRAINING
                </div>
                <div className="home-section-subtitle">
                    · INSIGHT3 ·
                </div>
                <Typography className="retraining-text mt-5 is-flex-grow-1">
                    {insight3.bodySmall}
                </Typography>
                <div className="retraining-buttons-wrapper mt-5">
                    <Link to={"/car#retraining"}>
                        <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                                className="has-text-weight-bold more-info" startIcon={<InfoOutlinedIcon/>}>
                            More Info
                        </Button>
                    </Link>
                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/services/f60ce61c-fb3e-4098-9a9b-2d06d550c294?source=easyshare'}
                            target={"_blank"}
                            className="orange-button has-text-weight-bold" startIcon={<EventTwoToneIcon/>}>
                        Book
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Retraining;