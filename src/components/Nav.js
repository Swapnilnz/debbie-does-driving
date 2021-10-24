import '../css/nav.css';
import avatar from '../assets/avatar.png';
import { useMediaQuery } from 'react-responsive';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';

function Nav() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    return (
        <nav className="nav">
            {isDesktopOrLaptop && <div className="nav-logo-container">
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="90" viewBox="0 0 270 94.03461040757418">
                        <defs>
                            <linearGradient id="SvgjsLinearGradient1011">
                                <stop stopColor="#FBB23F" offset="0"/>
                                <stop stopColor="#F95738" offset="1"/>
                            </linearGradient>
                        </defs>
                        <g transform="matrix(1.0526315789473684,0,0,1.0526315789473684,82.36842105263158,-24.631578545821338)"
                           fill="url(#SvgjsLinearGradient1011)">
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.2,44.7c2.5,2.1,30.2,1.7,30.2,1.7s14.6,0,18.7,0c3.2,0,6.2-5,6.2-7.4c0-1.1-1.1-5.2-10.5-5.2c-3.2,0-7,3.3-11.8,4.1   c-6.8,1.2-12.6,0.7-17.3,1.8c-1.6,0.2-12.8-2.5-15.9-1.8C6,38.5,6.5,42.5,9.2,44.7z"/>
                                <path
                                    d="M82.3,46.1c-2.1,0-4,0.4-5.8,1.2l-7.7-13.5l0,0c-0.3-0.5-1-1-1.7-1c-1.1,0-1.9,0.8-1.9,1.9c0,0.3,0.1,0.6,0.2,1l0,0   l7.8,13.5c-3.7,2.8-6,7.2-6,12.2c0,8.4,6.8,15.2,15.2,15.2s15.1-6.9,15.1-15.2S90.7,46.1,82.3,46.1z M82.3,70.8   c-5.3,0-9.5-4.2-9.5-9.5c0-2.9,1.3-5.4,3.3-7.1l4.7,8l0,0c0.3,0.5,1,1,1.7,1c1.1,0,1.9-0.8,1.9-1.9c0-0.3-0.1-0.6-0.2-1l0,0l-4.7-8   c1-0.3,1.9-0.5,3-0.5c5.3,0,9.5,4.2,9.5,9.5C91.8,66.6,87.6,70.8,82.3,70.8z"/>
                                <path
                                    d="M54.2,27.7c0.1,0,0.2,0,0.3-0.1l0,0l6.9-1.7l3.1,5.4l0,0c0.2,0.4,0.6,0.6,1.1,0.6c0.6,0,1.3-0.5,1.3-1.3   c0-0.2-0.1-0.4-0.2-0.6l0,0L63,24l0,0c-0.2-0.4-0.6-0.6-1.1-0.6c-0.1,0-0.2,0-0.3,0.1l0,0l-7.7,1.9l0,0c-0.5,0.1-1,0.6-1,1.2   C53,27.1,53.5,27.7,54.2,27.7z"/>
                                <path
                                    d="M79.5,42.1c0,0,1.1,0,1.1-1v-7.5c0-1-1.1-1-1.1-1c-3.3,0.4-5.6,3-5.6,4.7C73.9,39.2,76.2,41.7,79.5,42.1z"/>
                                <path
                                    d="M64.1,49H32.7c-1.4,0-2.4,1.3-2.2,2.6l1.5,8.9h-2.1C28.7,54,23,49,16.3,49C8.6,49,2.5,55.1,2.5,62.7   c0,7.6,6.1,13.8,13.8,13.8c6.9,0,12.5-5,13.5-11.5h3c0.1,0.5,0.4,1,0.8,1.3l4.7,3.5c0.4,0.3,0.8,0.4,1.4,0.4h17.2   c0.8,0,1.7-0.5,2-1.4L66.2,52C66.8,50.6,65.7,49,64.1,49z M16.1,70.8c-4.4,0-8-3.6-8-8s3.6-8,8-8c3.7,0,6.8,2.4,7.7,5.8h-8   c-0.5,0-1,0.6-1,1.5v1.7c0,0.8,0.4,1.5,1,1.5h8C22.9,68.4,19.8,70.8,16.1,70.8z"/>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>}
            <div className="nav-links is-flex is-align-items-center is-justify-content-center">
                <a href="/lessons" className="nav-links-item nav-links-item-text" aria-label="lessons">
                    <LocalLibraryTwoToneIcon/>
                    LESSONS
                </a>
                <a href="/book" className="nav-links-item nav-links-item-text" aria-label="book">
                    <EventTwoToneIcon/>
                    BOOK
                </a>
                <a href="/contact" className="nav-links-item nav-links-item-text" aria-label="contact">
                    <PermPhoneMsgTwoToneIcon/>
                    CONTACT
                </a>
            </div>
            {isDesktopOrLaptop && <div className="profile-logo is-flex is-align-items-center is-justify-content-end">
                {/*TODO*/}
                <a className="nav-links-item" href="/">
                    <img src={avatar} alt="avatar" className="avatar-img"/>
                </a>
            </div>}
        </nav>
    );
}

export default Nav;
