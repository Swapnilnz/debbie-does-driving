import '../../css/home/Reviews.css';
import Masonry from '@mui/lab/Masonry';
import {Stack} from "@mui/material";
import {useMediaQuery} from "react-responsive";
import {Avatar} from "@material-ui/core";
import {reviewData} from "./ReviewData";


function Reviews() {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});


    return (
        <div className="reviews-wrapper">
            <div className="has-text-weight-bold has-text-white is-flex is-flex-direction-row mt-5 home-section-header">
                REVIEWS
            </div>
            <div className="home-section-subtitle mb-5">
                · DON'T TRUST ME, TRUST THESE GUYS ·
            </div>
            <Masonry className="reviews-masonry" columns={isTabletOrMobile ? 1 : 3} spacing={3}>
                {reviewData.map((review, index) => (
                    <Stack key={index} className="reviews-card">
                        <div className="reviews-header">
                            <Avatar style={{background: review.bg}}>{review.name[0]}</Avatar>
                            <p className="reviews-name">{review.name}</p>
                        </div>
                        <p className="reviews-message"> {review.message}</p>

                    </Stack>
                ))}
            </Masonry>
        </div>
    )
}

export default Reviews;