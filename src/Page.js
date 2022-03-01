import {useEffect} from "react";

const Page = (props) => {
    useEffect(() => {
        document.title = props.title ? `DDD | ${props.title}` : "Debbie Does Driving";
    }, [props.title]);
    return props.children;
};

export default Page;