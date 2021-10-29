import '../css/Nav.css';
import avatar from '../assets/avatar.png';
import {LogoOnly} from './LogoSVG';
import { useMediaQuery } from 'react-responsive';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';

function Nav() {
    const isNotMobile = useMediaQuery({
        query: '(min-width: 768px)'
    })
    return (
        <nav className="nav">
            <div className="nav-logo-container">
                <a href="/">
                    <LogoOnly width="180" height="100"/>
                </a>
            </div>
            <div className="nav-links is-flex is-align-items-center is-justify-content-center">
                <a href="/lessons" className="nav-links-item nav-links-item-text" aria-label="lessons">
                    <LocalLibraryTwoToneIcon/>
                    {isNotMobile && 'LESSONS'}
                </a>
                <a href="/book" className="nav-links-item nav-links-item-text" aria-label="book">
                    <EventTwoToneIcon/>
                    {isNotMobile && 'BOOK'}
                </a>
                <a href="/contact" className="nav-links-item nav-links-item-text" aria-label="contact">
                    <PermPhoneMsgTwoToneIcon/>
                    {isNotMobile && 'CONTACT'}
                </a>
            </div>
            {isNotMobile && <div className="profile-logo is-flex is-align-items-center is-justify-content-end">
                {/*TODO*/}
                <a className="nav-links-item" href="/">
                    <img src={avatar} alt="avatar" className="avatar-img"/>
                </a>
            </div>}
        </nav>
    );
}

export default Nav;
