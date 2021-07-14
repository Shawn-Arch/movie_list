import { Layout, Pagination } from 'antd';
import { useEffect, useState } from 'react';

import { connect } from "react-redux";
import { actions } from "../../constant/actionCreators.js"

import MoiveList from '../../components/MovieList';
import {movie} from "../../util/data"
import Sort from "../../components/Sort"

import "./index.scss";

const { Header, Footer, Sider, Content } = Layout;

const MovielistPage = ({list_name, API, popularList, addPageToList})=> {
    const [curPage, setCurPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(()=>{
        if (popularList[curPage] === undefined) {
            fetch(API+curPage)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setTotalPage(data.total_pages);
                addPageToList(list_name, curPage, data.results.map((item)=>{
                    return new movie(item);
                }));
            })
        }
    },[curPage])

    function onChange(pageNumber) {
        setCurPage(pageNumber);
    }

    return (
    <>
        <Layout>
            <Sider className="page-sider">
                <Sort/>
            </Sider>
            <Layout>
                <Header>
                    <Pagination 
                        showQuickJumper 
                        defaultCurrent={curPage} 
                        defaultPageSize={20} 
                        total={totalPage}
                        showSizeChanger={false}
                        onChange={onChange} />
                </Header>
                <Content>
                    <MoiveList list={popularList[curPage] || []}/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </>);
}

const mapStateToProps = (state) => {
    return {
        popularList: state.popularList
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPageToList: (name, page, value) => dispatch(actions.addPageToList(name, page, value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovielistPage);

