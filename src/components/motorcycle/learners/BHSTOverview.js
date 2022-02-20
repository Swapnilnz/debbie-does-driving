import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BHSTOverview() {
    return (
        <div>
            <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                        className="mot-lesson-card-p">
                Before applying for a motorcycle learner licence, you must pass the Basic Handling Skills (BHST).
                Conducted at slow speed, this is to ensure you have the necessary basic skills to ride safely on the
                road once you obtain your learner licence.
                <br/><br/>
                Upon successful completion of BHST you will be issued a Certificate of Competency, for presenting to an
                authorised agency such as AA/VTNZ when applying for your learner motorcycle licence, which includes a
                theory test. So get studying your NZ motorcycle road code!
                Once you have your 6L learner licence you are now allowed to ride your LAMS approved motorcycle on the
                road, with L plate attached: 6L conditions apply (refer NZ road code for motorcyclists).
                <br/><br/>
                <div className={'box-container'}>
                    <div className={'boxed-p'}>
                        <b>BHST consists of four stages:</b>
                        <p className={'pt-3'}>1. Basic turn and stop</p>
                        <p>2. Figure of eight and park</p>
                        <p>3. Linking figures of eight</p>
                        <p>4. Increased speed and emergency stop</p>
                    </div>
                    <div className={'boxed-p'}>
                        <b>Each stage has various tasks:</b>
                        <p className={'pt-3'}>· Move off</p>
                        <p>· Straight ride</p>
                        <p>· Corner</p>
                        <p>· Stop</p>
                        <p>· Park</p>
                    </div>
                </div>

                <br/>
                <p>As you complete these tasks, you will be assessed in: looking in the right direction, signalling
                    correctly, making head checks before changing position, lateral position and control of motorcycle,
                    using appropriate speed, parking observation and parking movement.</p>
                <br/>
                Watch detailed information about the test in animated format:
                <br/><br/>
                <Accordion className="bhst-accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="has-text-white"/>}
                    >
                        <Typography variant={"h7"} className="has-text-white"
                                    fontWeight={'bold'}>
                            BHST Video
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <iframe width="100%" height={'300'}
                                src="https://www.youtube.com/embed/tqpT2cbTfx8"
                                title="YouTube video player" frameBorder="0"
                                allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </AccordionDetails>
                </Accordion>
            </Typography>
        </div>
    )
}

export default BHSTOverview;