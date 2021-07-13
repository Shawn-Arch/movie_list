const addPageToList = (name, page, value) => ({
    type: "addPageToList",
    payload: {name, page, value}
})

export const actions = {
    addPageToList
};
