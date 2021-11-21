import '../../css/home/GetInTouch.css'
import React, {useState} from 'react';

import {InputAdornment, TextField} from "@mui/material";
import {withStyles} from "@material-ui/core/styles";
import {Email, Send} from "@mui/icons-material";
import {Alert, Button, Snackbar} from "@mui/material";
import {useMediaQuery} from "react-responsive";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";


emailjs.init("user_g9lWclMvGS8QwiE769BVV");
const emailjsService = "zoho_contact";
const emailjsTemplateToDebbie = "to_debbie";
const emailjsTemplateToCustomer = "to_customer";

const styles = {
    input: {
        color: "white",
    }
};

function GetInTouch(props) {
    const {classes} = props;
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    // Set snackbar variables
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("Contact form submitted");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    // Form functions
    const { register, handleSubmit } = useForm();

    const onSubmit = function (data) {
        try {
            const date = Date().toLocaleString().split(" GMT")[0]; // removes the GMT+1300... bit at the end
            const message = data.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
            emailjs.send(emailjsService, emailjsTemplateToDebbie, {
                date: date,
                name: data.name,
                email: data.email,
                message: message,
            });
            emailjs.send(emailjsService, emailjsTemplateToCustomer, {
                date: date,
                name: data.name,
                email: data.email,
                message: message,
            });
            setSeverity("success");
            setMessage("Contact form submitted");
            setOpenSnackbar(true);
        } catch (err) {
            console.error(err);
            setSeverity("error");
            setMessage("Contact form failed to send. Please email or call instead");
            setOpenSnackbar(true);
        }

    }

    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                GET IN TOUCH
            </div>
            <div className="home-section-subtitle mb-5">
                · GOT A QUESTION? ·
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="is-flex is-flex-direction-column git-body">
                <TextField
                    fullWidth
                    {...register("name", { required: true })}
                    InputProps={{className: classes.input}}
                    required
                    color={"warning"}
                    focused
                    label="Name"
                />
                <TextField
                    fullWidth
                    {...register("email", { required: true })}
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
                    {...register("message", { required: true })}
                    label="Message"
                    required
                    multiline
                    rows={4}
                    InputProps={{className: classes.input}}
                    color={"warning"}
                    focused
                />
                <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                        type={"submit"}
                        className="orange-button has-text-weight-bold" startIcon={<Send/>}>
                    Send
                </Button>
            </form>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert severity={severity}
                       variant={"filled"}
                       onClose={handleClose}>
                    {message}
                </Alert>
            </Snackbar>

        </div>
    )
}

export default withStyles(styles)(GetInTouch);