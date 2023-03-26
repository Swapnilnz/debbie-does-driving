import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {Link} from "react-router-dom";

function BookButton({link}) {
    return (
        <>
            {process.env.REACT_APP_DISABLE_BOOKING === "false" &&
                <Button variant="contained" size={'large'}
                        disabled={false}
                        style={{zIndex: 2}}
                        href={link}
                        target={'_blank'}
                        className="orange-button has-text-weight-bold"
                        startIcon={<EventTwoToneIcon/>}>
                    Book
                </Button>}
            {process.env.REACT_APP_DISABLE_BOOKING === "true" &&
                <>
                    <Link to={"/contact"}>
                        <Button variant="contained" size={'large'}
                                disabled={false}
                                style={{zIndex: 2}}
                                className="orange-button has-text-weight-bold"
                                startIcon={<ContactMailIcon/>}>
                            Contact
                        </Button>
                    </Link>
                </>

            }
        </>

    )
}

export default BookButton;