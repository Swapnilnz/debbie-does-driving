import '../../css/home/Reviews.css';
import Masonry from '@mui/lab/Masonry';
import {Stack} from "@mui/material";
import {useMediaQuery} from "react-responsive";
import {Avatar} from "@material-ui/core";

const reviews = [
    {
        name: 'Tom Kahu',
        fname: 'Tom',
        bg: '#d56d2d',
        avatar: 'https://scontent.fwlg3-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/231194656_4587711204572540_1026354474099227966_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ef2BB30r_k0AX8tH6Wu&_nc_ht=scontent.fwlg3-1.fna&oh=01aae23a37ee10eec08d59f0f2080e0f&oe=618EDBF9',
        message: 'Highly recommend Debz for your bike license or any other kind of training to move towards what ever goal you\'re heading for, awesome lady, very professional with her lessons and very informative. I’ll see you in 9 months for my full ride thanks again…'
    },
    {
        name: 'Jenn Hooper',
        fname: 'Jenn',
        bg: '#d56d2d',
        avatar: 'https://scontent.fwlg3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/244467265_10158262746826881_8023994240980878780_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=NRp3lC-fe3wAX-AjPBV&_nc_ht=scontent.fwlg3-1.fna&oh=1e0f739d4f9a4578fdd3308373059c11&oe=61AF8961',
        message: 'Super knowledgeable and supportive. If you want a gentle hand that knows her stuff, Debbie’s your Gal! Thanks so much x',
    },
    {
        name: 'Runsin Jacob',
        fname: 'Runsin',
        bg: '#d56d2d',
        avatar: 'https://scontent.fwlg3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/176190624_4176659205697995_4039213119677748704_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BQU3rYf7_F0AX-jkPMO&_nc_ht=scontent.fwlg3-1.fna&oh=8acdf31b31a5aae422b8b330d7b8c373&oe=61AE2E34',
        message: 'the best rider instructor ever, very supportive, motivative, well experienced...',
    },
    {
        name: 'Stu Craig',
        fname: 'Stu',
        bg: '#d56d2d',
        avatar: 'https://scontent.fwlg3-1.fna.fbcdn.net/v/t39.30808-1/cp0/c9.476.653.652a/s60x60/243889864_4339042249525103_2163751152011049013_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=N7xMsm-5v8cAX8RtCYn&_nc_ht=scontent.fwlg3-1.fna&oh=4746fa135cd8f6a485e1584ea7130056&oe=618E9AC3',
        message: 'I did the 6F cbta course with Debbie, I fully recommend Debbie\'s services to anyone getting there bike licence, Debbie made the whole assessment comfortable friendly and honest, offered get advice before the assessment, and excellent helpful tips for improvement after the assessment, a no pressure friendly enjoyable service',
    },
    {
        name: 'Dulani Dissanayaka',
        fname: 'Dulani',
        bg: '#d56d2d',
        avatar: 'https://lh3.googleusercontent.com/a/AATXAJx1rq0ldAiqofVRjxE6pKnLUiol2e_Qh1pZ18Fl=w83-h83-p-rp-mo-br100',
        message: 'Very professional, quality and very valuable lessons she provide and highly recommend.',
    },
    {
        name: 'Nadeem Daraghmeh',
        fname: 'Nadeem',
        bg: '#d56d2d',
        avatar: 'https://lh3.googleusercontent.com/a/AATXAJx5DyIc9rTxDd0vb2Aj7QFJDkpscmHcJfKE49U_=w83-h83-p-rp-mo-br100',
        message: 'Professional, supportive and lots of experience, highly recommended.',
    }
]

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
                {reviews.map((review, index) => (
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