import "../css/home/Home.css"
import Hero from "../components/home/Hero";
import MeetDebbie from "../components/home/MeetDebbie";
import MotorcycleLessons from "../components/home/MotorcycleLessons";
import DDC from "../components/home/DDC";
import GetInTouch from "../components/contact/GetInTouch";
import Reviews from "../components/home/Reviews";
import Retraining from "../components/home/Retraining";


function Home() {

    return (
        <div className="home-wrapper">
            <Hero/>
            <div className="spacer layered-waves-1" id="meet-debbie"/>
            <MeetDebbie/>
            <div className="spacer layered-waves-2"/>
            <MotorcycleLessons/>
            <hr/>
            <DDC/>
            <hr/>
            <Retraining/>
            <div className="spacer layered-waves-4"/>
            <GetInTouch/>
            <div className="spacer layered-waves-5"/>
            <Reviews/>
        </div>
    );
}

export default Home;
