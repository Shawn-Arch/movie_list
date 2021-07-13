import { useState } from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import MovieCard from '../MovieCard';

const MovieRow = ({title, movieList}) => {
    return (
    <>
        <p>{title}</p>
        <LeftOutlined />
        {movieList.map((item)=>{
            return <MovieCard movie={item}/>
        })}
        <RightOutlined />
    </>);
}

export default MovieRow;