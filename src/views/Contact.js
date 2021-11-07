import GetInTouch from "../components/contact/GetInTouch";
import {Grid} from "@material-ui/core";
import ContactDetails from "../components/contact/ContactDetails";

function Contact() {
    return (
    <div className="contact-wrapper pd-7">
            <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
                <GetInTouch/>
            </Grid>
            <Grid item xs={12} md={3}>
                <ContactDetails/>
            </Grid>
        </Grid>
    </div>
    )
}

export default Contact;