import '../../css/home/GetInTouch.css'
import { withStyles } from "@material-ui/core/styles";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

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
            <div>Invercargill</div>
            <div>Hamilton</div>
            <div className="home-section-subtitle mb-1">
                MOTORCYCLE TRAINING
            </div>
            <div>Invercargill</div>

        </div>
    )
}

export default withStyles(styles)(GetInTouch);