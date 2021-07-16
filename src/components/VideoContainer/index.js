import YouTube from 'react-youtube';

const VideoContainer = ()=>{
    const opts = {
        height: '300',
        width: '450',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return (
        <>
            <p>Media</p>
            <YouTube videoId="2g811Eo7K8U" opts={opts}/>
        </>)
}

export default VideoContainer;