import '../../css/car/DDC.css';
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import DDCImage from "../../assets/ddc.png";
import Price from '../../assets/229.svg';
import {useMediaQuery} from "react-responsive";

function DDC() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});


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
                <div className="has-text-white mt-5">
                    <div className="car-price-image">
                        <img src={Price} height={150} width={150} alt={'price 229'}/>
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
                        className="mt-5 orange-button has-text-weight-bold center-mobile"
                        startIcon={<EventTwoToneIcon/>}>
                    Book
                </Button>
            </div>

        </div>
    );
}

export default DDC;