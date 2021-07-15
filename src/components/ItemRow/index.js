import { useState } from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { Row, Col } from 'antd';
import MovieCard from '../MovieCard';
import PeopleCard from '../PeopleCard';

import "./index.scss"

const ItemRow = ({type, title, maxPage,list}) => {
    const [curPage, setCurPage] = useState(0);
    if (!Array.isArray(list)) return(<></>);

    const handleRightClick = ()=>{
        setCurPage(curPage+1)
    }
    const handleLeftClick = ()=>{
        setCurPage(curPage-1)
    }
    return (
    <>
        <p className="list-title">{title}</p>
        <div className="container">
            {<LeftOutlined className="icon left-icon" onClick={handleLeftClick}/>}
            {<RightOutlined className="icon right-icon" onClick={handleRightClick}/>}
            <Row gutter={16} wrap={false} style={{right: curPage+"00%", transition: "right 1s"}}>
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