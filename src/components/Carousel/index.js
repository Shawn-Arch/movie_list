import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { movie } from "../../util/data";
import { v4 as uuidv4} from 'uuid'
import "./index.scss"
import { Player } from "video-react"

const MovieCarousel = () => {
    const [movies,setMovies] = useState([]);
    const [index,setIndex] = useState(1);

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a264be857d5395c70bd597cc0e9a04b5&language=en-US&page=${index}`)
        .then(res => res.json())
        .then(data => {
            const arr = [];
            for (let i=0;i<8;i++){
                console.log(data.results[i])
                arr.push(new movie(data.results[i]));
            }
            setMovies(arr);
        })
    }
    useEffect(()=>{
        getData();
    },[])

    


    return(
            <div>
                <Carousel>
                    {movies.map((item)=>{
                        return (
                        <div key={uuidv4()}>
                            <div  className="CarouselContainer">
                                <span className='title'>{item.title}</span>
                                <img src={item.backdrop_path} alt="background text" className="background"></img>
                                <img src={item.poster_path} alt="poster text" className="poster"></img>
                                {/* <Player className="video" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/> */}
                            </div>
                        </div>);
                    })}
                </Carousel>
            </div>
    )
}

export default MovieCarousel;