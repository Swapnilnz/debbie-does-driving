import Typography from "@mui/material/Typography";

function Gear() {
    return (
        <Typography variant="body2" zIndex={2} position={"relative"} flexGrow={1}
                    className="mot-lesson-card-p">
            Debbie provides the LAMS approved motorcycle, a great wee 150cc Suzuki. Bring your own authorised
            helmet/gloves, cover skin (no shorts/T-shirts), closed comfy footwear, water bottle. Some spare
            helmets/gloves are available, unless you are XS or XXXL (bring your own).
            <br/><br/>
            Photo ID – bring your NZ photo driver’s licence/passport (NZTA rules state that no
            temporary paper drivers licences without a photo can be accepted)
        </Typography>
    )
}

export default Gear;