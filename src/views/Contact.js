import GetInTouch from "../components/contact/GetInTouch";
import {Grid} from "@material-ui/core";
import ContactDetails from "../components/contact/ContactDetails";
import LocationDetails from "../components/contact/LocationDetails";
import Nav from "../components/Nav";

function Contact() {
    return (
        <div>
            <Nav/>
            <div className="contact-wrapper pd-7">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        <GetInTouch/>
                    </Grid>
                    <Grid item xs={12} md={4} className="pl-5">
                        <ContactDetails/>
                        <LocationDetails/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Contact;