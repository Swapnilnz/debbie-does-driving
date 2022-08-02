import '../css/motorcycle/Motorcycle.css';
// import Learners from "../components/motorcycle/learners/Learners";
// import Restricted from "../components/motorcycle/restricted/Restricted";
// import Full from "../components/motorcycle/Full";
// import L2 from '../assets/layered-waves-2.svg';
// import L3 from '../assets/layered-waves-3.svg';
import {Alert} from "@mui/lab";
import {useMediaQuery} from "react-responsive";

function Motorcycle() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (
        <div className="pd-7 is-flex is-justify-content-center pb-5 " id="learners">

            <Alert severity="info" style={{width: isDesktopOrLaptop ? "70vw" : "90vw"}}>
                Debbie is super pleased to announce she is now providing motorcycle training as a member of the <strong>Ornsby
                Motorcycle Training (OMT)</strong> team in Dunedin and Invercargill.
                <br/>
                <br/>
                For all your Motorcycle Training & Licensing needs, please contact OMT – phone: 03 9808933 / 0508 ORNSBY
                (676 729) OR website: <a target={"_blank"} rel="noreferrer"
                                         href={"https://www.motorcycletraining.co.nz"}>www.motorcycletraining.co.nz</a>
            </Alert>
            {/*<Learners/>*/}
            {/*<div className="spacer" id="restricted">*/}
            {/*    <img loading={'lazy'} src={L2} width={'100%'} alt={'divider'}/>*/}
            {/*</div>*/}
            {/*<Restricted/>*/}
            {/*<div className="spacer" id="full">*/}
            {/*    <img loading={'lazy'} src={L3} width={'100%'} alt={'divider'}/>*/}
            {/*</div>*/}
            {/*<Full/>*/}
        </div>
    )
}

export default Motorcycle;