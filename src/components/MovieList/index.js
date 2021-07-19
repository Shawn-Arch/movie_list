import MovieCard from "../MovieCard";

import { Row, Col } from 'antd';

const MovieList = ({list, list_type}) => {
    return (
    <>
        <Row type="flex" gutter={[24,24]}>
            {list.map((i)=>{
                return(
                    <Col style={{width: "20%"}} key={new Date() + Math.random()}>
                        <MovieCard movie={i} list_type={list_type}/>
                    </Col>);
            })}
        </Row>
    </>);
}

export default MovieList;