import '../../css/home/MeetDebbie.css'
import BlurImageLoader from "react-blur-image-loader";
import RoadSample from "../../assets/road-sample.jpg";
import BlurredRoadSample from "../../assets/blurred_road_sample.jpg";
import {useMediaQuery} from "react-responsive";

function MeetDebbie() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (<div className="meet-debbie-wrapper" >
        {isDesktopOrLaptop && <div className="p-4">
            <BlurImageLoader src={RoadSample} preview={BlurredRoadSample} fullCover={true} transitionTime={100}/>
        </div>}
        <div className="meet-debbie-body p-4">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row home-section-header">
                MEET <p className="text-bg">DEBBIE</p>
            </div>
            <p className="has-text-white meet-debbie-text mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi autem debitis eligendi, incidunt ipsam officia? Aliquid assumenda atque consectetur
                distinctio eius hic, neque officiis optio repellendus rerum temporibus veritatis! Dignissimos?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, minus, velit! A
                dipisci aliquam autem delectus, eveniet explicabo impedit maiores nostrum placeat,
                provident quae sed tempore vitae. Aliquid distinctio est officiis?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto autem, beatae
                consequatur debitis dolor dolorem est labore mollitia odit optio veritatis? Cumque dicta est iusto
                laborum quas, voluptates.
            </p>
        </div>
    </div>)
}

export default MeetDebbie;