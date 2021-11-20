import '../../css/home/GetInTouch.css'
import {InputAdornment, TextField} from "@mui/material";
import {withStyles} from "@material-ui/core/styles";
import {Email, Send} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {useMediaQuery} from "react-responsive";

const styles = {
    input: {
        color: "white",
    }
};

function GetInTouch(props) {
    const {classes} = props;
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                GET IN TOUCH
            </div>
            <div className="home-section-subtitle mb-5">
                · GOT A QUESTION? ·
            </div>
            <div className="is-flex is-flex-direction-column git-body">
                <TextField
                    fullWidth
                    InputProps={{className: classes.input}}
                    required
                    color={"warning"}
                    focused
                    label="Name"
                />
                <TextField
                    fullWidth
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <Email color={"warning"}/>
                            </InputAdornment>
                        )
                    }}
                    required
                    color={"warning"}
                    focused
                    type={"email"}
                    label="Email"
                />
                <TextField
                    required
                    label="Message"
                    multiline
                    rows={4}
                    InputProps={{className: classes.input}}
                    color={"warning"}
                    focused
                />
                <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                        className="orange-button has-text-weight-bold" startIcon={<Send/>}>
                    Send
                </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(GetInTouch);