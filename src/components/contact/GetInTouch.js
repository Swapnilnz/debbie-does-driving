import '../../css/home/GetInTouch.css'
import React, {useState} from 'react';

import {Alert, Button, InputAdornment, Snackbar, TextField} from "@mui/material";
import {withStyles} from "@material-ui/core/styles";
import {Badge, Email, Phone, Send} from "@mui/icons-material";
import {useMediaQuery} from "react-responsive";
import {useForm} from "react-hook-form";
import emailjs from "emailjs-com";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";


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
    const [tab, setTab] = useState('1');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    // Set snackbar variables
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState("warning");
    const [message, setMessage] = useState("Contact form submitted");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    // Form functions
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = function (data) {
        try {
            const isMCycle = tab === "1"
            console.log(isMCycle)
            const date = Date().toLocaleString().split(" GMT")[0]; // removes the GMT+1300... bit at the end

            console.log(data)
            const message = isMCycle ? "N/A" : data.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
            const experience = isMCycle ? data.experience.replace(/(?:\r\n|\r|\n)/g, '<br>') : "N/A";
            const goals = isMCycle ? data.goals.replace(/(?:\r\n|\r|\n)/g, '<br>') : "N/A";
            emailjs.send(emailjsService, emailjsTemplateToDebbie, {
                date: date,
                name: data.name,
                email: data.email,
                phone: data.number,
                message: message,
                lclass: isMCycle ? data.lclass : "N/A",
                experience: experience,
                goals: goals
            });
            emailjs.send(emailjsService, emailjsTemplateToCustomer, {
                date: date,
                name: data.name,
                email: data.email,
                lclass: data.lclass,
                phone: data.number,
                message: isMCycle ?
                    `Experience:\n${experience}\n
                    Goals:\n${goals}
                    ` : message,
            });
            setSeverity("warning");
            setMessage("Contact form submitted");
            setOpenSnackbar(true);
            reset({
                name: '',
                email: '',
                message: '',
                lclass: '',
                experience: '',
                goals: ''
            })
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
                · got a question? ·
            </div>
            <div className={"git-body is-flex is-flex-direction-column"}>
                <TabContext value={tab}>
                    <Box sx={{borderBottom: 1, zIndex: 2, alignSelf: "center"}}>
                        <TabList onChange={handleChange} textColor="white" indicatorColor={"secondary"}>
                            <Tab label="Motorcycle" value="1" sx={{color: tab === "1" ? "white" : "#a5a5a5"}}/>
                            <Tab label="General" value="2" sx={{color: tab === "2" ? "white" : "#a5a5a5"}}/>
                        </TabList>
                    </Box>
                    <TabPanel value={"1"}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="is-flex is-flex-direction-column" style={{gap: "1rem"}}>
                            <TextField
                                fullWidth
                                {...register("name", {required: true})}
                                InputProps={{className: classes.input}}
                                required
                                color={"warning"}
                                focused
                                label="Name"
                                inputProps={{maxLength: 20}}
                            />
                            <TextField
                                fullWidth
                                {...register("email", {required: true})}
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
                                inputProps={{maxLength: 50}}
                            />

                            <TextField
                                fullWidth
                                {...register("number", {required: true})}
                                InputProps={{
                                    className: classes.input,
                                    startAdornment: (
                                        <InputAdornment position={"start"}>
                                            <Phone color={"warning"}/>
                                        </InputAdornment>
                                    )
                                }}
                                required
                                color={"warning"}
                                focused
                                type={"number"}
                                label="Phone No."
                                inputProps={{max: 100000000000}}
                            />

                            <TextField
                                fullWidth
                                {...register("lclass", {required: true})}
                                InputProps={{
                                    className: classes.input,
                                    startAdornment: (
                                        <InputAdornment position={"start"}>
                                            <Badge color={"warning"}/>
                                        </InputAdornment>
                                    )
                                }}
                                required
                                color={"warning"}
                                focused
                                label="License Class"
                                inputProps={{maxLength: 20}}
                            />
                            <TextField
                                {...register("experience", {required: true})}
                                label="Experience"
                                required
                                multiline
                                rows={4}
                                InputProps={{className: classes.input}}
                                color={"warning"}
                                focused
                                inputProps={{maxLength: 300}}
                            />
                            <TextField
                                {...register("goals", {required: true})}
                                label="Goals"
                                required
                                multiline
                                rows={4}
                                InputProps={{className: classes.input}}
                                color={"warning"}
                                focused
                                inputProps={{maxLength: 300}}
                            />
                            <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                                    type={"submit"}
                                    className="orange-button has-text-weight-bold" startIcon={<Send/>}>
                                Send
                            </Button>
                        </form>
                    </TabPanel>
                    <TabPanel value={"2"}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="is-flex is-flex-direction-column" style={{gap: "1rem"}}>
                            <TextField
                                fullWidth
                                {...register("name", {required: true})}
                                InputProps={{className: classes.input}}
                                required
                                color={"warning"}
                                focused
                                label="Name"
                                inputProps={{maxLength: 20}}
                            />
                            <TextField
                                fullWidth
                                {...register("email", {required: true})}
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
                                inputProps={{maxLength: 50}}

                            />

                            <TextField
                                fullWidth
                                {...register("number", {required: true})}
                                InputProps={{
                                    className: classes.input,
                                    startAdornment: (
                                        <InputAdornment position={"start"}>
                                            <Phone color={"warning"}/>
                                        </InputAdornment>
                                    )
                                }}
                                required
                                color={"warning"}
                                focused
                                type={"number"}
                                label="Phone No."
                                inputProps={{max: 100000000000}}
                            />
                            <TextField
                                {...register("message", {required: false})}
                                label="Message"
                                required
                                multiline
                                rows={4}
                                InputProps={{className: classes.input}}
                                color={"warning"}
                                focused
                                inputProps={{maxLength: 500}}
                            />
                            <Button variant="contained" size={isDesktopOrLaptop ? 'large' : 'small'}
                                    type={"submit"}
                                    className="orange-button has-text-weight-bold" startIcon={<Send/>}>
                                Send
                            </Button>
                        </form>
                    </TabPanel>
                </TabContext></div>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleClose}
            >
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