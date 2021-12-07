import '../../css/home/Retraining.css';
import RetrainingImage from "../../assets/retraining.jpg";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {useMediaQuery} from "react-responsive";

function Retraining() {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});


    return (
        <div className="retraining-wrapper">
            {isDesktopOrLaptop &&
            <div className="p-4 is-flex is-justify-content-center home-image-wrapper retraining-image">
                <img loading={"lazy"} src={RetrainingImage} alt={"retraining"}/>
            </div>}
            <div className="retraining-body pt-0 pb-4 px-4">
                <div className="has-text-weight-bold has-text-white home-section-header">
                    DRIVER RETRAINING
                </div>
                <div className="home-section-subtitle">
                    · INSIGHT3 ·
                </div>
                <div className="has-text-white mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequatur earum eveniet
                    fugit, illo impedit in incidunt ipsum modi molestiae necessitatibus provident quaerat quisquam
                    saepe, sapiente temporibus ut, veniam!
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores consequuntur
                    dolore dolores esse explicabo inventore iure laudantium, maxime neque nobis quo recusandae, rem ut
                    vel veritatis voluptas voluptate!
                </div>
                <div className="retraining-buttons-wrapper mt-5">
                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            component={Link} to="/defensive-driving"
                            className="has-text-weight-bold more-info" startIcon={<InfoOutlinedIcon/>}>
                        More Info
                    </Button>

                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            className="orange-button has-text-weight-bold" startIcon={<EventTwoToneIcon/>}>
                        Book
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Retraining;