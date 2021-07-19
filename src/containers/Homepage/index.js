import { useEffect } from "react";
import { connect } from "react-redux";
import ItemRow from "../../components/ItemRow";
import {movie} from "../../util/data";
import MovieCarousel from "../../components/Carousel"
import {actions} from "../../constant/actionCreators.js"
import { APIs } from "../../constant/constant";
import "./index.scss"

const Homepage = (props) => {
    const {popularList, trendingList, addPageToList} = props;
    const fetchData = (api_url, name, page, addFunction) => {
        fetch(api_url+page)
            .then(res=>res.json())
            .then(data=>{
                addFunction(name, page, data.results.map((item)=>{
                    return new movie(item);
                }));
            })
    }
    useEffect(()=>{
        fetchData(APIs.POPULAR_MOVIES, "movie_popularList", 1, addPageToList)
        fetchData(APIs.TRENDING_MOVIES, "movie_trendingList", 1, addPageToList)
        fetchData(APIs.POPULAR_MOVIES, "movie_popularList", 2, addPageToList)
        fetchData(APIs.TRENDING_MOVIES, "movie_trendingList", 2, addPageToList)
    },[]);

    return(
    <>
        <MovieCarousel/>
        <div className="homepage-container">
            {popularList[1] !== undefined && popularList[2] !== undefined &&
            <ItemRow list={[...popularList[1], ...popularList[2]]} title="What's popular" maxPage={5} type="movie"/>}
            {trendingList[1] !== undefined && trendingList[2] !== undefined &&
            <ItemRow list={[...trendingList[1], ...trendingList[2]]} title="Trending" maxPage={5} type="movie"/>}
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        popularList: state.movie_popularList,
        trendingList: state.movie_trendingList
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPageToList: (name, page, value) => dispatch(actions.addPageToList(name, page, value))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);