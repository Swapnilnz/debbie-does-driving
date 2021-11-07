import '../css/Nav.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';import { LogoOnly } from './LogoSVG';
import React, { useState, useEffect } from 'react';
import { debounce } from "../utilities/helpers";
import { useMediaQuery } from 'react-responsive';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';

function Nav() {
    const isNotMobile = useMediaQuery({
        query: '(min-width: 768px)'
    });

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
        <nav className="nav" style={{ top: visible || !isNotMobile ? '0' : '-60px' }}>
            <div className="nav-logo-container">
                <a href="/">
                    <LogoOnly width="250" height="70"/>
                </a>
            </div>
            <div className="nav-links is-flex is-align-items-center is-justify-content-center">
                <a href="/lessons" className="nav-links-item nav-links-item-text" aria-label="lessons">
                    <LocalLibraryTwoToneIcon/>
                    {isNotMobile && 'LESSONS'}
                </a>
                <a href="/book" className="nav-links-item nav-links-item-text" aria-label="book">
                    <EventTwoToneIcon/>
                    {isNotMobile && 'BOOK NOW'}
                </a>
                <a href="/contact" className="nav-links-item nav-links-item-text" aria-label="contact">
                    <PermPhoneMsgTwoToneIcon/>
                    {isNotMobile && 'CONTACT'}
                </a>
            </div>
            <div className="profile-logo is-flex is-align-items-center is-justify-content-end">
                <a className="nav-links-item" href="https://www.facebook.com/DebbieDriverTrainer/" target="_blank" rel="noreferrer">
                    <FacebookRoundedIcon fontSize={"large"}/>
                </a>
            </div>
        </nav>
    );
}

export default Nav;
