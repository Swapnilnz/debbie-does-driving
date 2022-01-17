import '../../css/home/DDC.css'
import DDCImage from '../../assets/ddc.png'
import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useMediaQuery} from "react-responsive";
import {Link} from "react-router-dom";

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
                <div className="has-text-white mt-5 is-flex-grow-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores consequuntur
                    dolore dolores esse explicabo inventore iure laudantium, maxime neque nobis quo recusandae, rem ut
                    vel veritatis voluptas voluptate!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores consequuntur
                    dolore dolores esse explicabo inventore iure laudantium, maxime neque nobis quo recusandae, rem ut
                    vel veritatis voluptas voluptate!
                </div>
                <div className="ddc-buttons-wrapper mt-5">
                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            component={Link} to="/defensive-driving"
                            className="has-text-weight-bold more-info" startIcon={<InfoOutlinedIcon/>}>
                        More Info
                    </Button>

                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            href={'https://booking.setmore.com/scheduleappointment/7ce91070-a226-4451-b4a7-574d47cafe44/class/6b44d0ae-b0db-4c7d-86f0-5ff4b55b7d6d?source=easyshare'}
                            target={"_blank"}
                            className="orange-button has-text-weight-bold" startIcon={<EventTwoToneIcon/>}>
                        Book
                    </Button>
                </div>
            </div>
            <div className="p-4 is-flex is-justify-content-center home-image-wrapper">
                <img className="ddc-image" loading={"lazy"} src={DDCImage} alt={"car"}/>
            </div>
        </div>
    )
}

export default DDC;