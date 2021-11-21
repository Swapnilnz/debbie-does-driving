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
            <a className="address-line"
               href="https://www.google.com/maps/place/14a+Ballantyne+Avenue,+Upper+Riccarton,+Christchurch+8041/@-43.5345183,172.5688385,17z/data=!3m1!4b1!4m5!3m4!1s0x6d318bbacfdcd7c9:0x86366377bcc937ab!8m2!3d-43.5345183!4d172.5710272"
               target="_blank"
               rel="noopener noreferrer">
                Invercargill
            </a>
            <a className="address-line"
               href="https://www.google.com/maps/place/14a+Ballantyne+Avenue,+Upper+Riccarton,+Christchurch+8041/@-43.5345183,172.5688385,17z/data=!3m1!4b1!4m5!3m4!1s0x6d318bbacfdcd7c9:0x86366377bcc937ab!8m2!3d-43.5345183!4d172.5710272"
               target="_blank"
               rel="noopener noreferrer">
                Hamilton
            </a>

            <div className="home-section-subtitle mb-1">
                MOTORCYCLE TRAINING
            </div>
            <a className="address-line"
               href="https://www.google.com/maps/place/14a+Ballantyne+Avenue,+Upper+Riccarton,+Christchurch+8041/@-43.5345183,172.5688385,17z/data=!3m1!4b1!4m5!3m4!1s0x6d318bbacfdcd7c9:0x86366377bcc937ab!8m2!3d-43.5345183!4d172.5710272"
               target="_blank"
               rel="noopener noreferrer">
                Invercargill
            </a>

        </div>
    )
}

export default withStyles(styles)(GetInTouch);