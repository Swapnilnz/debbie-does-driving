import '../css/motorcycle/Motorcycle.css';
import {Alert} from "@mui/material";

function Motorcycle() {

    return (
        <div className="pd-7 is-flex is-justify-content-center is-flex-direction-column pb-5 " id="learners">
            <Alert severity="info" style={{width: "90%", alignSelf: "center"}}>
                Debbie is super pleased to announce she is now providing motorcycle training as a member of the <strong>Love
                Moto</strong> team in Invercargill.
                <br/>
                For all your Motorcycle Training & Licensing needs, please contact Love Moto – phone: 0220336445 |
                email: info@lovemoto.co.nz | website: <a target={"_blank"} rel="noreferrer"
                                                         href={"https://lovemoto.co.nz/"}>https://lovemoto.co.nz/</a>
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