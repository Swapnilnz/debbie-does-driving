import Typography from "@mui/material/Typography";
import {motorcycleWhatToBringLink} from "../../../utilities/text";

function Gear() {
    return (
        <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                    className="mot-lesson-card-p">
            Helmet, Clothing and Footwear – if bringing your own, ensure it meets NZ compliance
            standards. Find out if it does through
            <a className={'address-line-hover mx-2 has-text-weight-bold'} target={'_blank'}
               href={motorcycleWhatToBringLink}
               rel="noreferrer">
                this link.</a>
            <br/><br/>
            Spare helmets size L and XL and gloves are available.
            <br/><br/>
            You MUST wear long sleeves, long trousers, and comfortable covered shoes. Warm gear
            is always recommended, and wet weather gear is advisable to have on standby.
            <br/><br/>
            Photo ID – bring your NZ photo driver’s licence/passport (NZTA rules state that no
            temporary paper drivers licences without a photo can be accepted)
            <br/><br/>
            Own motorcycle MUST be roadworthy, current rego & WOF with good tyre tread & air pressure, L plate attached
            at rear
            <br/><br/>
            If using own LAMS roadworthy motorcycle, MUST be capable of maintaining open road speeds into head winds and
            on hills
        </Typography>
    )
}

export default Gear;