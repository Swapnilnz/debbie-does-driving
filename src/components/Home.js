import "../css/Home.css"
import {LogoAndWord} from './LogoSVG';
import HeroImgCropped from '../assets/hero_cropped.jpg';
import HeroImg from '../assets/hero.jpg';
import { useMediaQuery } from 'react-responsive';


function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
    <div className="home-wrapper">
        <div className="hero">
            {isDesktopOrLaptop && <img src={HeroImgCropped} className="hero-img" alt="debbie"/>}
            {isTabletOrMobile && <img src={HeroImg} className="hero-img" alt="debbie"/>}
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"/>
                </svg>
            </div>
            <div className="hero-overlay">
                {isDesktopOrLaptop && <LogoAndWord width="350" height="250" className="hero-logo"/>}
                {isTabletOrMobile && <LogoAndWord width="200" height="100" className="hero-logo"/>}
            </div>
        </div>

        <div className="spacer layered-waves"/>
    </div>
  );
}

export default Home;
