import '../../css/home/GetInTouch.css'
import {withStyles} from "@material-ui/core/styles";
import {LocationOn} from "@mui/icons-material";
import {ddc} from "../../utilities/text";

const styles = {
    input: {
        color: "white",
    }
};

function GetInTouch() {

    return (
        <div className="is-flex is-flex-direction-column align-left">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                OUR LOCATIONS
            </div>
            <div className="align-left home-section-subtitle mb-1 mt-1">
                DEFENSIVE DRIVING COURSE
            </div>
            <a className="address-line-hover"
               href="https://www.google.com/maps/place/Adventure+Southland+Limited/@-46.3505345,168.3443628,17z/data=!3m1!4b1!4m5!3m4!1s0xa9d2dc89f80adb79:0x8751bd7a03c88adf!8m2!3d-46.3505345!4d168.3465503"
               target="_blank"
               rel="noopener noreferrer">
                <p className="is-flex is-flex-direction-row">
                    <LocationOn fontSize={"small"} className="mr-1"/>
                    {ddc.location}
                </p>
            </a>
            <br/>
            <a className="address-line-hover"
               href="https://goo.gl/maps/vUC8wZsexdre28Pa6"
               target="_blank"
               rel="noopener noreferrer">
                <p className="is-flex is-flex-direction-row">
                    <LocationOn fontSize={"small"} className="mr-1"/>
                    {ddc.location2}
                </p>
            </a>
            <br/>

            <a className="address-line-hover"
               href="https://goo.gl/maps/93vWfJgtZXcubZgy6"
               target="_blank"
               rel="noopener noreferrer">
                <p className="is-flex is-flex-direction-row">
                    <LocationOn fontSize={"small"} className="mr-1"/>
                    {ddc.location3}
                </p>
            </a>

            <br/><br/>

            <div className="align-left home-section-subtitle mb-1">
                MOTORCYCLE TRAINING
            </div>
            <div className="address-line">
                <a className={'address-line-hover'} target={'_blank'}
                   href={'https://goo.gl/maps/bDPDBeu8NHiZs7zY9'} rel="noreferrer">
                    <p className="is-flex is-flex-direction-row is-align-items-center">
                        <LocationOn fontSize={"small"} className="mr-1"/>
                        82 Moore Road, Lorneville, Invercargill 9874
                    </p>
                </a>
            </div>
            <br/>

        </div>
    )
}

export default withStyles(styles)(GetInTouch);