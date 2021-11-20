import '../css/Nav.css';
import '../css/index.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {LogoOnly} from './LogoSVG';
import React, {useEffect, useState} from 'react';
import {debounce} from "../utilities/helpers";
import {useMediaQuery} from 'react-responsive';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';
import {LiveHelpTwoTone} from "@mui/icons-material";
import SportsMotorsportsTwoToneIcon from '@mui/icons-material/SportsMotorsportsTwoTone';
import DriveEtaTwoToneIcon from '@mui/icons-material/DriveEtaTwoTone';
import {Link, useLocation} from "react-router-dom";

function Nav() {
    const isNotMobile = useMediaQuery({
        query: '(min-width: 768px)'
    });

    const location = useLocation();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);


    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav className="nav" style={{top: visible || !isNotMobile ? '0' : '-60px'}}>
            <div className="nav-logo-container">
                <Link to="/">
                    <LogoOnly width="250" height="70"/>
                </Link>
            </div>
            <div className="nav-links is-flex is-align-items-center is-justify-content-center">
                <Link to="/motorcycle"
                      className={"nav-links-item nav-links-item-text" + (location.pathname === '/motorcycle' ? ' orange-color-text' : '')}
                      aria-label="motorcycle">
                    <SportsMotorsportsTwoToneIcon fontSize={"small"} className="mr-1"/>
                    {isNotMobile && 'MOTORCYCLE'}
                </Link>
                <Link to="/defensive-driving"
                      className={"nav-links-item nav-links-item-text" + (location.pathname === '/defensive-driving' ? ' orange-color-text' : '')}
                      aria-label="defensive driving">
                    <DriveEtaTwoToneIcon fontSize={"small"} className="mr-1"/>
                    {isNotMobile && 'DDC'}
                </Link>
                <Link to="/contact"
                      className={"nav-links-item nav-links-item-text" + (location.pathname === '/contact' ? ' orange-color-text' : '')}
                      aria-label="contact">
                    <PermPhoneMsgTwoToneIcon fontSize={"small"} className="mr-1"/>
                    {isNotMobile && 'CONTACT'}
                </Link>
                <Link to="/faq"
                      className={"nav-links-item nav-links-item-text" + (location.pathname === '/faq' ? ' orange-color-text' : '')}
                      aria-label="faq">
                    <LiveHelpTwoTone fontSize={"small"} className="mr-1"/>
                    {isNotMobile && 'FAQ'}
                </Link>
            </div>
            {isNotMobile && <div className="profile-logo is-flex is-align-items-center is-justify-content-end">
                <a className="nav-links-item" href="https://www.facebook.com/DebbieDriverTrainer/" target="_blank"
                   rel="noreferrer">
                    <FacebookRoundedIcon color={"warning"} fontSize={"large"}/>
                </a>
            </div>}
        </nav>
    );
}

export default Nav;
