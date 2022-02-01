import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import bhstMap from "../../../assets/bhst_map.png";

function Location() {
    return (
        <div>
            <Typography variant="body1" zIndex={2} position={"relative"} flexGrow={1}
                        className="mot-lesson-card-p is-flex gap-1 is-justify-content-center mb-3">
                <LocationOnIcon/>
                <a className={'address-line-hover'} target={'_blank'}
                   href={'https://www.google.com/search?q=pgg%20wrightson%20woolstore%2C%20invercargill&hl=en&sxsrf=APq-WBtxupY2iZ3gUnVUWvi6vH-lTiCaig:1643609104391&source=hp&ei=DHz3YeH-NaqJr7wPm8GoiAc&iflsig=AHkkrS4AAAAAYfeKHJWeK2M2flxbRWGaJYNPY5tpZ1JM&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWLQGYN8RaAFwAHgBgAEAiAEAkgEAmAEAoAECoAEBsAEK&sclient=gws-wiz&tbs=lf:1,lf_ui:4&tbm=lcl&rflfq=1&num=10&rldimm=7448212313340177482&lqi=CiVwZ2cgd3JpZ2h0c29uIHdvb2xzdG9yZSwgaW52ZXJjYXJnaWxsIgOIAQFItbiRno6rgIAIWjIQABABEAIYABgBGAMiJHBnZyB3cmlnaHRzb24gd29vbHN0b3JlIGludmVyY2FyZ2lsbJIBFGFncmljdWx0dXJhbF9zZXJ2aWNlqgEfEAEqGyIXcGdnIHdyaWdodHNvbiB3b29sc3RvcmUoAA&ved=2ahUKEwij48OGqdv1AhXrxDgGHae-CRMQvS56BAgDECM&rlst=f#rlfi=hd:;si:7448212313340177482,l,CiVwZ2cgd3JpZ2h0c29uIHdvb2xzdG9yZSwgaW52ZXJjYXJnaWxsIgOIAQFItbiRno6rgIAIWjIQABABEAIYABgBGAMiJHBnZyB3cmlnaHRzb24gd29vbHN0b3JlIGludmVyY2FyZ2lsbJIBFGFncmljdWx0dXJhbF9zZXJ2aWNlqgEfEAEqGyIXcGdnIHdyaWdodHNvbiB3b29sc3RvcmUoAA;mv:[[-46.3977167,168.34684959999998],[-46.4042799,168.3421329]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4'}
                   rel="noreferrer">
                    PGG Wrightson Woolstore, 2 Fox Street</a>
            </Typography>
            <img className={'p-4 home-image-wrapper'} src={bhstMap} loading={'lazy'}
                 alt={'bhst map'}/>
        </div>
    )
}

export default Location;