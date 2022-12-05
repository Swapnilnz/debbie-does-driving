import DDC from "../components/car/DDC";
import Retraining from "../components/car/Retraining";

function Car() {
    return (
        <div className="pd-7" id="ddc">
            <DDC/>
            {/*<div id={"training"}/>*/}
            {/*<hr/>*/}
            {/*<Training/>*/}
            <div id={"retraining"}/>
            <hr/>
            <Retraining/>
        </div>
    );
}

export default Car;