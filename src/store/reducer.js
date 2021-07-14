const initialState = {
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
    switch (action.type) {
        case "addPageToList":
            const {name, page, value} = action.payload;
            return ({
                ...state,
                [name]: {...(state[name]), [page]: value}
            });
        default:
            return { ...state };
    }
};
  
export default reducer;