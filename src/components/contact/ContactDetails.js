import '../../css/home/GetInTouch.css'
import { withStyles } from "@material-ui/core/styles";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// import {useMediaQuery} from "react-responsive";

const styles = {
    input: {
        color: "white",
    }
};

function GetInTouch(props) {
    // const {classes} = props;
    // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                CONTACT
            </div>
            {/*<div className="home-section-subtitle mb-3">*/}
            {/*    · GET IN TOUCH DIRECTLY ·*/}
            {/*</div>*/}
            <div>
                <PhoneIcon/>
                <a className="has-text-white"
                   href={"tel:" + process.env.REACT_APP_PHONE_NUMBER}>{process.env.REACT_APP_PHONE_NUMBER}</a>
            </div>
            <div>
                <EmailIcon/>
                <a className="has-text-white"
                   href={"mailto: " + process.env.REACT_APP_EMAIL}>{process.env.REACT_APP_EMAIL}</a>
            </div>
        </div>
    )
}

export default withStyles(styles)(GetInTouch);