import '../../css/home/Hero.css'
import BlurImageLoader from "react-blur-image-loader";
import HeroImgCropped from "../../assets/hero_cropped.png";
import BlurredHeroCropped from "../../assets/blurred_hero_cropped.png";
import HeroImg from "../../assets/hero.png";
import BlurredHeroImg from "../../assets/blurred_hero.png";
import {LogoAndWord} from "../LogoSVG";
import Button from "@mui/material/Button";
import LocalLibraryTwoToneIcon from "@mui/icons-material/LocalLibraryTwoTone";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import {useMediaQuery} from "react-responsive";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return (
        <div className="hero">
            {isDesktopOrLaptop && <BlurImageLoader src={HeroImgCropped} preview={BlurredHeroCropped} fullCover={true} transitionTime={100}/>}
            {isTabletOrMobile && <BlurImageLoader src={HeroImg} preview={BlurredHeroImg} fullCover={true} transitionTime={100}/>}
            <div className="wave">
                <svg className="shadow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"/>
                </svg>
            </div>
            <div className="hero-overlay">
                <div>
                    {isDesktopOrLaptop && <LogoAndWord width="450" height="150"/>}
                    {isTabletOrMobile && <LogoAndWord width="200" height="150" />}
                </div>
                <div className="has-text-white my-3 has-text-centered overlay-contact">
                    <p>{process.env.REACT_APP_EMAIL}</p>
                    {isDesktopOrLaptop && <p>·</p>}
                    <p>{process.env.REACT_APP_PHONE_NUMBER}</p>
                </div>
                <div>
                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            className="overlay-button mx-2 mb-5 has-text-weight-bold" startIcon={<LocalLibraryTwoToneIcon />}>
                        Lessons
                    </Button>
                    <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                            className="overlay-button mx-2 mb-5 has-text-weight-bold" startIcon={<EventTwoToneIcon />}>
                        Book
                    </Button>
                </div>
                {isDesktopOrLaptop &&
                <AnchorLink href='#meet-debbie'>
                    <IconButton className="arrow-down-overlay" href="/home#meet-debbie">
                        <KeyboardArrowDownIcon color="white"/>
                    </IconButton>
                </AnchorLink>}
            </div>
        </div>
    )
}

export default Hero;