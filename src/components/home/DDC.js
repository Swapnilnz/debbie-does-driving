import '../../css/home/DDC.css'
import DDCImage from '../../assets/ddc.png'
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {useMediaQuery} from "react-responsive";

function DDC() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (
        <div className="ddc-wrapper">
            <div className="ddc-body pt-0 pb-4 px-4">
                <div className="has-text-weight-bold has-text-white home-section-header">
                    DEFENSIVE DRIVING
                </div>
                <div className="home-section-subtitle">
                    · TAILGATING IS NOT THE ANSWER ·
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
                <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                        className="orange-button mt-5 has-text-weight-bold" startIcon={<EventTwoToneIcon/>}>
                    Book
                </Button>
            </div>
            <div className="p-4 is-flex is-justify-content-center home-image-wrapper">
                <img className="ddc-image" src={DDCImage} alt={"ddc"}/>
            </div>
        </div>
    )
}

export default DDC;