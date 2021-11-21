import '../../css/home/GetInTouch.css'
import {withStyles} from "@material-ui/core/styles";

const styles = {
    input: {
        color: "white",
    }
};

function GetInTouch() {

    return (
        <div className="is-flex is-flex-direction-column is-align-items-left">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                OUR LOCATIONS
            </div>
            <div className="home-section-subtitle mb-1">
                DEFENSIVE DRIVER COURSE
            </div>
            <a className="address-line-hover"
               href="https://https://www.google.com/maps/place/Adventure+Southland+Limited/@-46.3505345,168.3443628,17z/data=!3m1!4b1!4m5!3m4!1s0xa9d2dc89f80adb79:0x8751bd7a03c88adf!8m2!3d-46.3505345!4d168.3465503"
               target="_blank"
               rel="noopener noreferrer">
                Invercargill
            </a>

            <div className="home-section-subtitle mb-1">
                MOTORCYCLE TRAINING
            </div>
            <div className="address-line"
               href="https://www.google.com/maps/place/14a+Ballantyne+Avenue,+Upper+Riccarton,+Christchurch+8041/@-43.5345183,172.5688385,17z/data=!3m1!4b1!4m5!3m4!1s0x6d318bbacfdcd7c9:0x86366377bcc937ab!8m2!3d-43.5345183!4d172.5710272"
               target="_blank"
               rel="noopener noreferrer">
                Your place, Invercargill
            </div>

        </div>
    )
}

export default withStyles(styles)(GetInTouch);