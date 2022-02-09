import '../css/Footer.css';
import {WordOnly} from "./LogoSVG";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import React from "react";

function Footer() {
    return (
        <div className="footer pb-6">
            <WordOnly width={300} height={70}/>
            <a className="footer-text"
               href={"mailto:" + process.env.REACT_APP_EMAIL}>
                {process.env.REACT_APP_EMAIL}
            </a>
            <a className="footer-text"
               href={"tel:" + process.env.REACT_APP_PHONE_NUMBER}>
                {process.env.REACT_APP_PHONE_NUMBER}
            </a>
            <a href="https://www.facebook.com/DebbieDriverTrainer/" target="_blank" rel="noreferrer">
                <FacebookRoundedIcon color={"warning"} fontSize={"large"}/>
            </a>
            <p className="footer-copyright">©2021 by Debbie Does Driving</p>
            <p className='footer-copyright' style={{fontSize: '0.6rem'}}>
                Created by
                <a className={'link mx-1'}
                   href={'https://www.linkedin.com/in/swapnil-bhagat00/'}
                   target='_blank' rel="noreferrer"
                >Swapnil Bhagat</a> and
                <a className={'link mx-1'}
                   href={'https://www.linkedin.com/in/raven-townsend-39b39017a/'}
                   target='_blank' rel="noreferrer"
                >Raven Townsend</a>
            </p>
        </div>
    )
}

export default Footer;