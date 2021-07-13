import { useEffect } from "react";
import { connect } from "react-redux";
import MovieRow from "../../components/MovieRow";
import {movie} from "../../util/data";

import {actions} from "../../constant/actionCreators.js"
import { APIs } from "../../constant/constant";

const Homepage = (props) => {
    const {popularList, trendingList, addPageToPopularList, addPageToTrendingList} = props;
    const fetchData = (api_url, name, page, addFunction) => {
        fetch(api_url+page)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const arr = [];
                data.results.forEach((item)=>{
                    arr.push(new movie(item));
                })
                addFunction(name, page, arr);
            })
    }
    useEffect(()=>{
        fetchData(APIs.POPULAR_MOVIES, "popularList", 1, addPageToPopularList)
        fetchData(APIs.TRENDING_MOVIES, "trendingList", 1, addPageToTrendingList)
        fetchData(APIs.POPULAR_MOVIES, "popularList", 2, addPageToPopularList)
        fetchData(APIs.TRENDING_MOVIES, "trendingList", 2, addPageToTrendingList)
    },[]);

    return(
    <>
        {popularList[1] !== undefined && popularList[2] !== undefined &&
        <MovieRow movieList={[...popularList[1], ...popularList[2]]} title="What's popular"/>}
        {trendingList[1] !== undefined && trendingList[2] !== undefined &&
        <MovieRow movieList={[...trendingList[1], ...trendingList[2]]} title="Trending"/>}
    </>);
}

const mapStateToProps = (state) => {
    return {
        popularList: state.popularList,
        trendingList: state.trendingList
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPageToPopularList: (name, page, value) => dispatch(actions.addPageToList(name, page, value)),
        addPageToTrendingList: (name, page, value) => dispatch(actions.addPageToList(name, page, value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);