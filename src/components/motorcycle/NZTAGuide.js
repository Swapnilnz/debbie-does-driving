import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

function NZTAGuide() {
    return (
        <div className={'is-flex is-flex-direction-row is-align-items-center is-justify-content-center'}>
            <br/>
            <br/>
            <InfoTwoToneIcon fontSize={'small'} className={'mr-1'}/>
            <a className={'guide-link pl-1'}
               href={'https://www.nzta.govt.nz/assets/Driver-Licences/docs/cbta-course-guide.pdf'}
               target='_blank' rel="noreferrer"> For more info, check out this guide by NZTA.</a>
        </div>
    )
}

export default NZTAGuide;