import '../../css/home/GetInTouch.css'
import {withStyles} from "@material-ui/core/styles";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const styles = {
    input: {
        color: "white",
    }
};

function GetInTouch() {

    return (
        <div className="is-flex is-flex-direction-column align-left">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                CONTACT INFO
            </div>
            <div>
                <a className="address-line-hover"
                   href={"tel:" + process.env.REACT_APP_PHONE_NUMBER}>
                    <PhoneIcon className="has-text-white mr-1 pt-2"/>
                    {process.env.REACT_APP_PHONE_NUMBER}
                </a>
            </div>
            <div>
                <a className="address-line-hover"
                   href={"mailto: " + process.env.REACT_APP_EMAIL}>
                    <EmailIcon className="has-text-white mr-1 pt-2"/>
                    {process.env.REACT_APP_EMAIL}
                </a>
            </div>
        </div>
    )
}

export default withStyles(styles)(GetInTouch);