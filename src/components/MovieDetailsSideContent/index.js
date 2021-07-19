import "./index.scss"
const MovieDetailsSideContent = ({sideContent}) => {
    return (
        <div className='sideContentContainer'>
            <div className='BoldText'>Status</div>
            <div className='Text'>{sideContent.status}</div>
            <div className='BoldText'>Original Language</div>
            <div className='Text'>{sideContent.spoken_languages.map(item=>item.english_name+' ')}</div>
            <div className='BoldText'>Budget</div>
            <div className='Text'>{sideContent.budget===0?'-':'$'+sideContent.budget}</div>
            <div className='BoldText'>Revenue</div>
            <div className='Text'>{sideContent.revenue===0?'-':'$'+sideContent.revenue}</div>
        </div>
    )
}

export default MovieDetailsSideContent;