import { Card, Progress} from 'antd';
import { connect } from "react-redux";
import { HeartTwoTone, HeartFilled, DeleteTwoTone, DeleteFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";
import "./index.scss"

import { actions } from '../../constant/actionCreators';

const { Meta } = Card;

const MovieCard = ({list_type, movie, isInLikeList, isInBlockList, addMovieToLikeList, removeMovieToLikeList, addMovieToBlockList, removeMovieToBlockList}) => {
    let strokeColor = "red"
    if (movie.vote_average > 4 && movie.vote_average < 6) {
        strokeColor = "yellow"
    } else if(movie.vote_average >= 6) {
        strokeColor = "#108ee9"
    }
    return (
    <div className={"card" + ((isInBlockList === undefined || list_type === "myBlock") ? "": " blocked")}>
        {list_type !== "tv" ?
        (<>
            {isInLikeList === undefined ? 
            <HeartTwoTone twoToneColor="#eb2f96" className="like icon-card" onClick={()=>addMovieToLikeList(movie)}/>
            : <HeartFilled className="like icon-card" onClick={()=>removeMovieToLikeList(movie.id)}/>}
            {isInBlockList === undefined ? 
            <DeleteTwoTone className="block icon-card" onClick={()=>addMovieToBlockList(movie)}/>
            : <DeleteFilled className="block icon-card" onClick={()=>removeMovieToBlockList(movie.id)}/>}
        </>) :
        (<></>)}
        <Progress strokeColor={strokeColor} type="circle" percent={movie.vote_average * 10} width={"3.5vw"} className="vote"/>
        {(isInBlockList === undefined && list_type !== "tv")? 
        <Link to={"/movie/"+movie.id}>
            <Card
                hoverable
                cover={<img alt={movie.title} src={movie.poster_path} />}>
                <Meta title={movie.title} description={movie.release_date} />
            </Card>
        </Link>
        :<Card
                cover={<img alt={movie.title} src={movie.poster_path} />}>
                <Meta title={movie.title} description={movie.release_date} />
        </Card>
        }
    </div>);
}

const mapStateToProps = (state, ownProps) => {
    const {movie} = ownProps;
    const id = movie.id;
    return {
        isInLikeList: state.liked_list[id],
        isInBlockList: state.blocked_list[id],
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMovieToLikeList: (movie) => dispatch(actions.addMovieToLikeList(movie)),
        removeMovieToLikeList: (movieId) => dispatch(actions.removeMovieToLikeList(movieId)),
        addMovieToBlockList: (movie) => dispatch(actions.addMovieToBlockList(movie)),
        removeMovieToBlockList: (movieId) => dispatch(actions.removeMovieToBlockList(movieId))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);