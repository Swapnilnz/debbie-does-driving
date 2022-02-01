import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

function BHSTOverview() {
    return (
        <div>
            <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                        className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                <LocationOnIcon/>
                <a className={'address-line-hover'} target={'_blank'}
                   href={'https://www.google.com/search?q=pgg%20wrights on%20woolstore%2C%20invercargill&hl=en&sxsrf=APq-WBtxupY2iZ3gUnVUWvi6vH-lTiCaig:1643609104391&source=hp&ei=DHz3YeH-NaqJr7wPm8GoiAc&iflsig=AHkkrS4AAAAAYfeKHJWeK2M2flxbRWGaJYNPY5tpZ1JM&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWLQGYN8RaAFwAHgBgAEAiAEAkgEAmAEAoAECoAEBsAEK&sclient=gws-wiz&tbs=lf:1,lf_ui:4&tbm=lcl&rflfq=1&num=10&rldimm=7448212313340177482&lqi=CiVwZ2cgd3JpZ2h0c29uIHdvb2xzdG9yZSwgaW52ZXJjYXJnaWxsIgOIAQFItbiRno6rgIAIWjIQABABEAIYABgBGAMiJHBnZyB3cmlnaHRzb24gd29vbHN0b3JlIGludmVyY2FyZ2lsbJIBFGFncmljdWx0dXJhbF9zZXJ2aWNlqgEfEAEqGyIXcGdnIHdyaWdodHNvbiB3b29sc3RvcmUoAA&ved=2ahUKEwij48OGqdv1AhXrxDgGHae-CRMQvS56BAgDECM&rlst=f#rlfi=hd:;si:7448212313340177482,l,CiVwZ2cgd3JpZ2h0c29uIHdvb2xzdG9yZSwgaW52ZXJjYXJnaWxsIgOIAQFItbiRno6rgIAIWjIQABABEAIYABgBGAMiJHBnZyB3cmlnaHRzb24gd29vbHN0b3JlIGludmVyY2FyZ2lsbJIBFGFncmljdWx0dXJhbF9zZXJ2aWNlqgEfEAEqGyIXcGdnIHdyaWdodHNvbiB3b29sc3RvcmUoAA;mv:[[-46.3977167,168.34684959999998],[-46.4042799,168.3421329]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4'}
                   rel="noreferrer">
                    PGG Wrightson Woolstore</a>
                <AccessTimeTwoToneIcon className={'ml-3'}/>
                1 hour
            </Typography>
            <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                        className="mot-lesson-card-p">
                The BHST ensures that you have the required skills to ride safely on the road
                once
                you have your learners license. You must perform this test before applying for
                your
                learner license.
                <br/><br/>
                Watch the video below for more information on what is tested, and how.
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