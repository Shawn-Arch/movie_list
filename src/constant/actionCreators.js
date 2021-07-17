const addPageToList = (name, page, value) => ({
    type: "addPageToList",
    payload: {name, page, value}
})

const addResultsNumToList = (list_name, num) => ({
    type: "addResultsNumToList",
    payload: {list_name, num}
})

const addMovieToLikeList = (movie) => ({
    type: "addMovieToLikeList",
    payload: movie
})

const removeMovieToLikeList = (movieId) => ({
    type: "removeMovieToLikeList",
    payload: movieId
})

const addMovieToBlockList = (movie) => ({
    type: "addMovieToBlockList",
    payload: movie
})

const removeMovieToBlockList = (movieId) => ({
    type: "removeMovieToBlockList",
    payload: movieId
})

export const actions = {
    addPageToList,
    addResultsNumToList,
    addMovieToLikeList,
    removeMovieToLikeList,
    addMovieToBlockList,
    removeMovieToBlockList
};
