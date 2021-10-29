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
        </div>
        <div className="hero-overlay">
            {isDesktopOrLaptop && <LogoAndWord width="350" height="250" className="hero-logo"/>}
            {isTabletOrMobile && <LogoAndWord width="200" height="100" className="hero-logo"/>}
        </div>
    </div>
  );
}

export default Home;
