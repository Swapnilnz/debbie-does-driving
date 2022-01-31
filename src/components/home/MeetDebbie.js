import '../../css/home/MeetDebbie.css'
import BlurImageLoader from "react-blur-image-loader";
import MeetDebbieImg from "../../assets/meet-debbie.jpg";
import {useMediaQuery} from "react-responsive";
import {meetDebbie} from '../../utilities/text';
import {Typography} from "@mui/material";

function MeetDebbie() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (
        <div className="meet-debbie-wrapper">
            {isDesktopOrLaptop && <div className="p-4 home-image-wrapper">
                <BlurImageLoader src={MeetDebbieImg} fullCover={true} transitionTime={100}/>
            </div>}
            <div className="meet-debbie-body pt-0 pb-4 px-4">
                <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row home-section-header">
                    MEET <p className="text-bg">DEBBIE</p>
                </div>
                <Typography className='meet-debbie-text'>
                    {meetDebbie}
                </Typography>

            </div>
        </div>)
}

export default MeetDebbie;