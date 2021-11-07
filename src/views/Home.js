import "../css/home/Home.css"
import Hero from "../components/home/Hero";
import MeetDebbie from "../components/home/MeetDebbie";
import MotorcycleLessons from "../components/home/MotorcycleLessons";
import DDC from "../components/home/DDC";
import GetInTouch from "../components/contact/GetInTouch";


function Home() {

    return (
    <div className="home-wrapper">
        <Hero/>
        <div className="spacer layered-waves-1" id="meet-debbie"/>
        <MeetDebbie/>
        <div className="spacer layered-waves-2" />
        <MotorcycleLessons/>
        <div className="spacer layered-waves-2" />
        <DDC/>
        <div className="spacer layered-waves-2" />
        <GetInTouch/>
    </div>
  );
}

export default Home;
