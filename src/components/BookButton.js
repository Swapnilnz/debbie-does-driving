import Button from "@mui/material/Button";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import Typography from "@mui/material/Typography";

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
                    <Button variant="contained" size={'large'}
                            disabled={true}
                            style={{zIndex: 2}}
                            href={link}
                            target={'_blank'}
                            className="orange-button has-text-weight-bold"
                            startIcon={<EventTwoToneIcon/>}>
                        Book
                    </Button>
                    <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                                className="mot-lesson-card-p mt-1">
                        Sorry, this is currently disabled, please contact Debbie
                    </Typography>
                </>

            }
        </>

    )
}

export default BookButton;