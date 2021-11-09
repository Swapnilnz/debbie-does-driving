import '../css/Footer.css';
import {WordOnly} from "./LogoSVG";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import React from "react";

function Footer() {
    return (
        <div className="footer pb-6">
            <WordOnly width={300} height={70}/>
            <p className="footer-text">{process.env.REACT_APP_EMAIL}</p>
            <p className="footer-text">{process.env.REACT_APP_PHONE_NUMBER}</p>
            <a href="https://www.facebook.com/DebbieDriverTrainer/" target="_blank" rel="noreferrer">
                <FacebookRoundedIcon color={"warning"} fontSize={"large"}/>
            </a>
            <p className="footer-copyright">©2021 by Debbie Does Driving</p>
        </div>
    )
}

export default Footer;