import '../css/motorcycle/Motorcycle.css';
import Learners from "../components/motorcycle/Learners";
import Restricted from "../components/motorcycle/Restricted";
import Full from "../components/motorcycle/Full";

function Motorcycle() {
    return (
        <div className="pd-7">
            <Learners/>
            <div className="spacer layered-waves-2"/>
            <Restricted/>
            <div className="spacer layered-waves-3"/>
            <Full/>
        </div>
    )
}

export default Motorcycle;