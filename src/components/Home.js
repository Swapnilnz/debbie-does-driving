import "../css/Home.css"
import {LogoAndWord} from './LogoSVG';
import HeroImgCropped from '../assets/hero_cropped.png';
import HeroImg from '../assets/hero.png';
import RoadSample from '../assets/road-sample.jpg'
import { useMediaQuery } from 'react-responsive';
import Button from '@mui/material/Button';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

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
                <svg className="shadow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"/>
                </svg>
            </div>
            <div className="hero-overlay">
                <div>
                    {isDesktopOrLaptop && <LogoAndWord width="450" height="150"/>}
                    {isTabletOrMobile && <LogoAndWord width="200" height="90" />}
                </div>
                <div className="has-text-white my-3 has-text-centered overlay-contact">
                    <p>debbiedoesdriving@gmail.com</p>
                    {isDesktopOrLaptop && <p>·</p>}
                    <p>0223544184</p>
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
                {isDesktopOrLaptop && <IconButton className="arrow-down-overlay">
                    <KeyboardArrowDownIcon color="white"/>
                </IconButton>}
            </div>
        </div>

        <div className="spacer layered-waves-1"/>
        <div className="meet-debbie-wrapper">
            {isDesktopOrLaptop && <div className="p-4">
                <img src={RoadSample} width={300} height={900} className="meet-debbie-image" alt="road"/>
            </div>}
            <div className="meet-debbie-body p-4">
                <div className="has-text-weight-bold has-text-white meet-debbie-header is-flex is-flex-direction-row">
                    MEET <p className="text-bg">DEBBIE</p>
                </div>
                <p className="has-text-white meet-debbie-text mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi autem debitis eligendi, incidunt ipsam officia? Aliquid assumenda atque consectetur
                    distinctio eius hic, neque officiis optio repellendus rerum temporibus veritatis! Dignissimos?
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, minus, velit! A
                    dipisci aliquam autem delectus, eveniet explicabo impedit maiores nostrum placeat,
                    provident quae sed tempore vitae. Aliquid distinctio est officiis?
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto autem, beatae
                    consequatur debitis dolor dolorem est labore mollitia odit optio veritatis? Cumque dicta est iusto
                    laborum quas, voluptates.
                </p>
            </div>
        </div>
        <div className="spacer layered-waves-2"/>
    </div>
  );
}

export default Home;
