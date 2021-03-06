import '../../css/home/DDC.css'
import DDCImage from '../../assets/ddc.png'
import Button from "@mui/material/Button";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useMediaQuery} from "react-responsive";
import {HashLink as Link} from 'react-router-hash-link';
import {ddc} from "../../utilities/text";
import {Typography} from "@mui/material";

function DDC() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (
        <div className="ddc-wrapper">
            <div className="ddc-body pt-0 pb-4 px-4">
                <div className="has-text-weight-bold has-text-white home-section-header  has-text-centered">
                    DEFENSIVE DRIVING
                </div>
                <div className="home-section-subtitle">
                    · tailgating is not the answer ·
                </div>
                <Typography className="ddc-text mt-5 is-flex-grow-1">
                    {ddc.bodySmall}
                </Typography>
                <div className="ddc-buttons-wrapper mt-5">
                    <Link to={"/car#ddc"}>
                        <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                                className="has-text-weight-bold more-info" startIcon={<InfoOutlinedIcon/>}>
                            More Info
                        </Button>
                    </Link>
                </div>
            </div>
            {isDesktopOrLaptop &&
                <div className="p-4 is-flex is-justify-content-center home-image-wrapper">
                    <img className="ddc-image" loading={"lazy"} src={DDCImage} alt={"car"} width={300}/>
                </div>
            }

        </div>
    )
}

export default DDC;