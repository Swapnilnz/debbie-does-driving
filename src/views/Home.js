import "../css/home/Home.css"
import Hero from "../components/home/Hero";
import MeetDebbie from "../components/home/MeetDebbie";
import MotorcycleLessons from "../components/home/MotorcycleLessons";
import DDC from "../components/home/DDC";
import GetInTouch from "../components/contact/GetInTouch";
import Reviews from "../components/home/Reviews";
import Retraining from "../components/home/Retraining";
import L1 from '../assets/layered-waves-1.svg';
import L2 from '../assets/layered-waves-2.svg';
import L4 from '../assets/layered-waves-4.svg';
import L5 from '../assets/layered-waves-5.svg';


function Home() {

    return (
        <div className="home-wrapper">
            <Hero/>
            <div className="spacer" id="meet-debbie">
                <img src={L1} width={'100%'} alt={'divider'}/>
            </div>
            <MeetDebbie/>
            <div className="spacer">
                <img src={L2} width={'100%'} alt={'divider'}/>
            </div>
            <MotorcycleLessons/>
            <hr/>
            <DDC/>
            <hr/>
            <Retraining/>
            <div className="spacer">
                <img src={L4} width={'100%'} alt={'divider'}/>
            </div>
            <GetInTouch/>
            <div className="spacer">
                <img src={L5} width={'100%'} alt={'divider'}/>
            </div>
            <Reviews/>
        </div>
    )
        ;
}

export default Home;
