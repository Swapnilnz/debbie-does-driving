// Random color generator
export const randomColor = () => {
    const colors = ['#d56d2d', '#d5a52d', '#d52d2d', '#2d6dd5', '#2dd5d5', '#2dd55e', '#d52dd5', '#d52d6d', '#2dd5a5'];
    return colors[Math.floor(Math.random() * colors.length)];
};

export const reviewData = [
    {
        name: 'Anonymous',
        fname: 'Anonymous',
        bg: randomColor(),
        message: 'I attended the Insight 3 course recently,  Debbie was absolutely fantastic.  She is not only supportive but extremely professional. I\'ve learnt so much from her.  She has been of great assistance to me and I would highly recommend her ',
    },
    {
        name: 'Tom Kahu',
        fname: 'Tom',
        bg: randomColor(),
        message: 'Highly recommend Debz for your bike license or any other kind of training to move towards what ever goal you\'re heading for, awesome lady, very professional with her lessons and very informative. I’ll see you in 9 months for my full ride thanks again…'
    },
    {
        name: 'Jenn Hooper',
        fname: 'Jenn',
        bg: randomColor(),
        message: 'Super knowledgeable and supportive. If you want a gentle hand that knows her stuff, Debbie’s your Gal! Thanks so much x',
    },
    {
        name: 'Runsin Jacob',
        fname: 'Runsin',
        bg: randomColor(),
        message: 'the best rider instructor ever, very supportive, motivative, well experienced...',
    },
    {
        name: 'Stu Craig',
        fname: 'Stu',
        bg: randomColor(),
        message: 'I did the 6F cbta course with Debbie, I fully recommend Debbie\'s services to anyone getting there bike licence, Debbie made the whole assessment comfortable friendly and honest, offered get advice before the assessment, and excellent helpful tips for improvement after the assessment, a no pressure friendly enjoyable service',
    },
    {
        name: 'Dulani Dissanayaka',
        fname: 'Dulani',
        bg: randomColor(),
        message: 'Very professional, quality and very valuable lessons she provide and highly recommend.',
    },
    {
        name: 'Nadeem Daraghmeh',
        fname: 'Nadeem',
        bg: randomColor(),
        message: 'Professional, supportive and lots of experience, highly recommended.',
    }
]