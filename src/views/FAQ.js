import '../css/faq/FAQ.css';
import {FAQData} from "../components/faq/FAQData";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';
import Button from '@material-ui/core/Button';
import {HashLink as Link} from 'react-router-hash-link';

function FAQ() {
    return (
        <div className="pd-7 is-flex is-flex-direction-column is-align-items-center" id={"questions"}>
            <div className="has-text-weight-bold has-text-white mt-2 mb-5 page-header">
                FAQ
            </div>
            <div className="mb-6 mx-4 faq-body">
                {FAQData.map((faq, index) => (
                    <Accordion className="faq-accordion">
                        <AccordionSummary
                            key={index}
                            expandIcon={<ExpandMoreIcon className="has-text-white"/>}
                        >
                            <Typography variant={"h6"} className="has-text-white">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="faq-accordion-text">
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <div className="has-text-weight-bold has-text-white mt-2 mb-5 faq-subheader">
                QUESTION NOT LISTED?
            </div>
            <div>
                <Link to={"/contact#get-in-touch"}>
                    <Button variant="contained" size={'large'}
                            className="orange-button has-text-white mb-6 has-text-weight-bold"
                            startIcon={<PermPhoneMsgTwoToneIcon/>}>
                        CONTACT
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FAQ;