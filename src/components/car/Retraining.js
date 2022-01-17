import {useMediaQuery} from "react-responsive";
import RetrainingImage from "../../assets/retraining.jpg";
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import Price from '../../assets/195.svg';

function Retraining() {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});


    return (
        <div className="retraining-wrapper">
            {isDesktopOrLaptop &&
                <div className="p-4 is-flex is-justify-content-center home-image-wrapper retraining-image">
                    <img loading={"lazy"} src={RetrainingImage} alt={"retraining"}/>
                </div>}
            <div className="retraining-body pt-0 pb-4 px-4 has-text-centered-mobile">
                <div className="has-text-weight-bold has-text-white home-section-header">
                    DRIVER RETRAINING
                </div>
                <div className="home-section-subtitle">
                    · INSIGHT3 ·
                </div>
                <div className="has-text-white mt-5 is-flex-grow-1">
                    <div className="car-price-image">
                        <img src={Price} height={150} width={150}/>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequatur earum eveniet
                    fugit, illo impedit in incidunt ipsum modi molestiae necessitatibus provident quaerat quisquam
                    saepe, sapiente temporibus ut, veniam!
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores consequuntur
                    dolore dolores esse explicabo inventore iure laudantium, maxime neque nobis quo recusandae, rem ut
                    vel veritatis voluptas voluptate!
                </div>
                <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                        className="orange-button has-text-weight-bold mt-5" startIcon={<EventTwoToneIcon/>}>
                    Book
                </Button>
            </div>
        </div>
    );
}

export default Retraining;