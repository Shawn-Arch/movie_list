import { Layout, Pagination } from 'antd';
import { useEffect, useState } from 'react';

import { connect } from "react-redux";
import { actions } from "../../constant/actionCreators.js"

import MoiveList from '../../components/MovieList';
import {movie} from "../../util/data"
import Sort from "../../components/Sort"
import { APIs } from '../../constant/constant'
import "./index.scss";

const { Header, Footer, Sider, Content } = Layout;

const CustomPage = ({list_name, listToShow})=> {
    const [curPage, setCurPage] = useState(1);

    const movieArr = Object.entries(listToShow).sort((a, b) => {
        return b[1].addTime - a[1].addTime
    }).map((item)=>item[1]);

    const [sortType,setSortType] = useState('Filter');
    const [sortedList,setSortedList] = useState({});
    const [sortPage,setSortPage] = useState(1);

    

    function onChange(pageNumber) {
        setCurPage(pageNumber);
    }

    return (
    <>
        <Layout>
            <Sider className="page-sider">
                <Sort setSortType={setSortType} sortType={sortType} setCurPage={setCurPage}/>
            </Sider>
            <Layout>
                <Header>
                    <Pagination 
                        hideOnSinglePage
                        showQuickJumper 
                        current = {curPage}
                        defaultCurrent={curPage} 
                        defaultPageSize={20} 
                        total={listToShow.length}
                        showSizeChanger={false}
                        onChange={onChange} />
                </Header>
                <Content>
                    <MoiveList list_type={list_name==="blocked_list"&&"myBlock"} list={sortType!=='Filter'?(sortedList[curPage]  || []):(movieArr.slice((curPage-1)*20,curPage*20) || [])}/>
                </Content>
            </Layout>
        </Layout>
    </>);
}

const mapStateToProps = (state, ownProps) => {
    const { list_name } = ownProps;
    return {
        listToShow: state[list_name]
    };
};

export default connect(mapStateToProps)(CustomPage);

