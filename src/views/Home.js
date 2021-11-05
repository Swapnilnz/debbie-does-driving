import "../css/home/Home.css"
import Hero from "../components/home/Hero";
import MeetDebbie from "../components/home/MeetDebbie";


function Home() {
    return (
    <div className="home-wrapper">
        <Hero/>
        <div className="spacer layered-waves-1"/>
        <MeetDebbie/>
        <div className="spacer layered-waves-2"/>
    </div>
  );
}

export default Home;
