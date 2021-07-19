const initialState = {
    total_results: {},
    movie_popularList: {},
    movie_trendingList: {},
    movie_now_playing: {},
    movie_upcoming: {},
    movie_top_rated: {},
    tv_popularList: {},
    tv_airing_today: {},
    tv_on_the_air: {},
    tv_top_rated: {},
    liked_list: {},
    blocked_list: {}
};
  
const reducer = (state = initialState, action = {}) => {
    let movie;
    let movieId;
    switch (action.type) {
        case "addResultsNumToList":
            const {list_name, num} = action.payload;
            return ({
                ...state,
                total_results: {...(state.total_results), [list_name]: num}
            });
        case "addPageToList":
            const {name, page, value} = action.payload;
            return ({
                ...state,
                [name]: {...(state[name]), [page]: value}
            });
        case "addMovieToLikeList":
            movie = action.payload;
            return ({
                ...state,
                liked_list: {...(state.liked_list), [movie.id]: {...movie, addTime: new Date()}}
            });
        case "removeMovieToLikeList":
            movieId = action.payload;
            delete state.liked_list[movieId]
            return ({
                ...state,
                liked_list: {...(state.liked_list)}
            });
        case "addMovieToBlockList":
            movie = action.payload;
            return ({
                ...state,
                blocked_list: {...(state.blocked_list), [movie.id]: {...movie, addTime: new Date()}}
            });
        case "removeMovieToBlockList":
            movieId = action.payload;
            delete state.blocked_list[movieId]
            return ({
                ...state,
                blocked_list: {...(state.blocked_list)}
            });
        default:
            return { ...state };
    }
};
  
export default reducer;