import '../css/motorcycle/Motorcycle.css';
import Learners from "../components/motorcycle/learners/Learners";
import Restricted from "../components/motorcycle/restricted/Restricted";
import Full from "../components/motorcycle/Full";
import L2 from '../assets/layered-waves-2.svg';
import L3 from '../assets/layered-waves-3.svg';

function Motorcycle() {

    return (
        <div className="pd-7 is-flex is-justify-content-center is-flex-direction-column pb-5 " id="learners">
            <Learners/>
            <div className="spacer" id="restricted">
                <img loading={'lazy'} src={L2} width={'100%'} alt={'divider'}/>
            </div>
            <Restricted/>
            <div className="spacer" id="full">
                <img loading={'lazy'} src={L3} width={'100%'} alt={'divider'}/>
            </div>
            <Full/>
        </div>
    )
}

export default Motorcycle;