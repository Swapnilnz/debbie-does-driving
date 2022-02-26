import "../css/home/Home.css"
import Hero from "../components/home/Hero";
import MeetDebbie from "../components/home/MeetDebbie";
import MotorcycleLessons from "../components/home/MotorcycleLessons";
import DDC from "../components/home/DDC";
import GetInTouch from "../components/contact/GetInTouch";
import Reviews from "../components/home/Reviews";
import Retraining from "../components/home/Retraining";
import L1SVG from '../assets/layered-waves-1.svg';
import L1PNG from '../assets/layered-waves-1.png';
import L2SVG from '../assets/layered-waves-2.svg';
import L2PNG from '../assets/layered-waves-2.png';
import L4SVG from '../assets/layered-waves-4.svg';
import L4PNG from '../assets/layered-waves-4.png';
import L5SVG from '../assets/layered-waves-5.svg';
import L5PNG from '../assets/layered-waves-5.png';
import CarTraining from "../components/home/CarTraining";
import {useMediaQuery} from "react-responsive";


function Home() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const L1 = isDesktopOrLaptop ? L1SVG : L1PNG;
    const L2 = isDesktopOrLaptop ? L2SVG : L2PNG;
    const L4 = isDesktopOrLaptop ? L4SVG : L4PNG;
    const L5 = isDesktopOrLaptop ? L5SVG : L5PNG;
    return (
        <div className="home-wrapper" id="debbie">
            <Hero/>
            <div className="spacer" id="meet-debbie">
                <img loading={'lazy'} src={L1} width={'100%'} alt={'divider'}/>
            </div>
            <MeetDebbie/>
            <div className="spacer">
                <img loading={'lazy'} src={L2} width={'100%'} alt={'divider'}/>
            </div>
            <MotorcycleLessons/>
            <hr/>
            <CarTraining/>
            <hr/>
            <DDC/>
            <hr/>
            <Retraining/>
            <div className="spacer">
                <img loading={'lazy'} src={L4} width={'100%'} alt={'divider'}/>
            </div>
            <GetInTouch/>
            <div className="spacer">
                <img loading={'lazy'} src={L5} width={'100%'} alt={'divider'}/>
            </div>
            <Reviews/>
        </div>
    );
}

export default Home;
