import MovieCard from "../MovieCard";

import { Row, Col } from 'antd';

const MovieList = ({list}) => {
    const arr = list.reduce((acc, item, index)=>{
        if(index % 5 === 0) {
            acc.push([item]);
        } else {
            acc[Math.floor(index / 5)].push(item);
        }
        return acc;
    },[]);
    return (
    <>
        {arr.map((item)=>{
            return(
                <Row justify="space-around" key={new Date() + Math.random()}>
                    {item.map(i=>{
                        return(
                            <Col span={4} key={new Date() + Math.random()}>
                                <MovieCard movie={i}/>
                            </Col>)
                    })}
                </Row>);
        })}
    </>);
}

export default MovieList;