import { useState } from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import MovieCard from '../MovieCard';

import "./index.scss"

const MovieRow = ({title, movieList}) => {
    const [startIndex, setStartIndex] = useState(0);
    const handleRightClick = ()=>{
        setStartIndex(startIndex+7)
    }
    const handleLeftClick = ()=>{
        setStartIndex(startIndex-7)
    }
    return (
    <>
        <p className="list-title">{title}</p>
        <div className="container">
            {startIndex !== 0 && <LeftOutlined className="icon left-icon" onClick={handleLeftClick}/>}
            {startIndex !== 28 && <RightOutlined className="icon right-icon" onClick={handleRightClick}/>}
            <Row justify="space-around">
            {movieList.map((item, index)=>{
                if (startIndex <= index && index < startIndex + 7) {
                    return (
                        <Col span={3} key={new Date() + Math.random()}>
                            <MovieCard movie={item}/>
                        </Col>);
                }
            })}
            </Row>
        </div>
    </>);
}

export default MovieRow;