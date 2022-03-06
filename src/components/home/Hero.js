import '../../css/home/Hero.css'
import BlurImageLoader from "react-blur-image-loader";
import HeroImgCropped from "../../assets/hero_cropped.png";
import BlurredHeroCropped from "../../assets/blurred_hero_cropped.png";
import HeroImg from "../../assets/hero.png";
import BlurredHeroImg from "../../assets/blurred_hero.png";
import {LogoAndWord} from "../LogoSVG";
import {useMediaQuery} from "react-responsive";

function Hero() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});
    return (
        <div className="hero">
            {isDesktopOrLaptop &&
                <BlurImageLoader src={HeroImgCropped} preview={BlurredHeroCropped} fullCover={true}
                                 transitionTime={100}/>}
            {isTabletOrMobile &&
                <BlurImageLoader src={HeroImg} preview={BlurredHeroImg} fullCover={true} transitionTime={100}/>}
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"/>
                </svg>
            </div>
            <div className="hero-overlay">
                <div>
                    {isDesktopOrLaptop && <LogoAndWord width="450" height="150"/>}
                    {isTabletOrMobile && <LogoAndWord width="200" height="150"/>}
                </div>
                <div className="has-text-white my-3 has-text-centered overlay-contact">
                    <p>{process.env.REACT_APP_EMAIL}</p>
                    {isDesktopOrLaptop && <p>·</p>}
                    <p>{process.env.REACT_APP_PHONE_NUMBER}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;