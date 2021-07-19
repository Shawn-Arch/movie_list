import { Layout, Pagination } from 'antd';
import { useEffect, useState } from 'react';

import { connect } from "react-redux";
import { actions } from "../../constant/actionCreators.js"

import MoiveList from '../../components/MovieList';
import {movie} from "../../util/data"
import Sort from "../../components/Sort"
import { APIs } from '../../constant/constant'
import "./index.scss";

const { Header, Sider, Content } = Layout;

const MovielistPage = ({title, list_type, list_name, API, listToShow, nums, addPageToList, addResultsNumToList})=> {
    const [curPage, setCurPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10000);

    const [sortType,setSortType] = useState('Filter');
    const [sortedList,setSortedList] = useState({});
    const [sortPage,setSortPage] = useState(1);

    const fetchData = () => {
        fetch(API+curPage)
            .then(res=>res.json())
            .then(data=>{
                addResultsNumToList(list_name, data.total_results);
                addPageToList(list_name, curPage, data.results.map((item)=>{
                    return new movie(item);
                }));
            })
    };

    useEffect(()=>{
        if (sortType==='Filter') {
            if (listToShow[curPage] === undefined || nums === undefined) {
                fetchData();
            }
        }
        else {
            fetchSortData(sortType);
        }
    },[curPage, list_name, sortType]);

    function onChange(pageNumber) {
        setCurPage(pageNumber);
    }

    const fetchSortData = (sortType) => {
        switch(sortType){
            case 'Popularity Descending':
                fetchSOrtDataByType(APIs.POPULARITY_DESCENDING,curPage);break;
            case 'Popularity Aescending':
                fetchSOrtDataByType(APIs.POPULARITY_ASCENDING,curPage);break;
            case 'Rating Descending':
                fetchSOrtDataByType(APIs.RATING_DESCENDING,curPage);break;
            case 'Rating Ascending':
                fetchSOrtDataByType(APIs.RATING_ASCENDING,curPage);break;
            case 'Release Date Descending':
                fetchSOrtDataByType(APIs.RELEASE_DATA_DESCENDING,curPage);break;
            case 'Release Data Ascending':
                fetchSOrtDataByType(APIs.RELEASE_DATA_ASCENDING,curPage);break;
            case 'Title (A-Z)':
                fetchSOrtDataByType(APIs.TITLE_A_Z,curPage);break;
            case 'Title (Z-A)':
                fetchSOrtDataByType(APIs.TITLE_Z_A,curPage);break;
            default:

        }
    }

    const fetchSOrtDataByType = (type,page) => [
        fetch(APIs.BASE_URL_BEGIN+type+APIs.BASE_URL_MID+page+APIs.BASE_URL_END)
            .then(res=>res.json())
            .then(data=>{
                setSortedList((state)=>{
                    return {
                        ...state,
                        [page]: data.results.map((item)=>new movie(item))
                    };
                });
            })
    ]

    return (
    <>
        <Layout>
            <Header className="movie-list-title">{title}</Header>
            <Layout>
                <Sider className="page-sider" width='300'>
                    <Sort setSortType={setSortType} sortType={sortType} setCurPage={setCurPage}/>
                </Sider>
                <Layout>
                    <Header>
                        <Pagination 
                            showQuickJumper 
                            current = {curPage}
                            defaultCurrent={curPage} 
                            defaultPageSize={20} 
                            total={sortType==='Filter' ? nums : totalPage}
                            showSizeChanger={false}
                            onChange={onChange} />
                    </Header>
                    <Content>
                        <MoiveList list_type={list_type} list={sortType!=='Filter'?(sortedList[curPage]  || []):(listToShow[curPage] || [])}/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </>);
}

const mapStateToProps = (state, ownProps) => {
    const { list_name } = ownProps;
    return {
        listToShow: state[list_name],
        nums: state.total_results[list_name]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPageToList: (name, page, value) => dispatch(actions.addPageToList(name, page, value)),
        addResultsNumToList: (list_name, num) => dispatch(actions.addResultsNumToList(list_name, num)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovielistPage);

