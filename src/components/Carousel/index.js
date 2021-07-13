import { Carousel } from "antd";
import { useEffect, useState } from "react";

import { movie } from "../../util/data";

const MovieCarousel = () => {
    const [movies,setMovies] = useState([]);
    const [index,setIndex] = useState(1);

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a264be857d5395c70bd597cc0e9a04b5&language=en-US&page=${index}`)
        .then(res => res.json())
        .then(data => {
            const arr = [];
            for (let i=0;i<4;i++){
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
        <Carousel autoplay>
            {movies.map((item)=>{
                return (
                <div>
                    <span>{item.title}</span>
                {/* <img src={movies.results[0].poster_path} alt="img text"></img> */}
                </div>);
            })}
        </Carousel>
    )
}

export default MovieCarousel;