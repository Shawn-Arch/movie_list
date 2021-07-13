const initialState = {
    popularList: {},
    trendingList: {}
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