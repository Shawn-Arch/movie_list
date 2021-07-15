import { useState } from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { Row, Col } from 'antd';
import MovieCard from '../MovieCard';
import PeopleCard from '../PeopleCard';

import "./index.scss"

const ItemRow = ({type, title, list}) => {
    const [startIndex, setStartIndex] = useState(0);
    if (!Array.isArray(list)) return(<></>);

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
            {/* {startIndex !== 0 && <LeftOutlined className="icon left-icon" onClick={handleLeftClick}/>} */}
            {/* {startIndex !== 28 && <RightOutlined className="icon right-icon" onClick={handleRightClick}/>} */}
            <Row gutter={16} wrap={false}>
                {list.map((item)=>{
                    return (
                        <Col span={4} key={new Date() + Math.random()}>
                            {type==="movie"?<MovieCard movie={item}/>:<PeopleCard person={item}/>}
                        </Col>);
                })}
            </Row>
        </div>
    </>);
}

export default ItemRow;