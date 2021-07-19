import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { APIs } from '../../constant/constant';
import './index.scss'
const VideoContainer = ({id})=>{
    const [videos,setVideos] = useState(null);
    const fetchVideo = () => {
      fetch(APIs.MOVIE_VIDEO_URL_PART1+id+APIs.MOVIE_VIDEO_URL_PART2)
        .then(res=>res.json())
        .then(data=>{
          console.log(data.results[0].key)
          setVideos(data.results);
        })
    }

    useEffect(()=>{
      fetchVideo();
    },[])

    const opts = {
        // height: '100%',
        width: '100%',
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
        <div className='VideoSize'>
            {videos===null?<></>:<YouTube className="innerSize" videoId={videos[0].key} opts={opts}/>}
        </div>)
}

export default VideoContainer;