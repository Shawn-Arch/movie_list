class movie {
    constructor(data) {
        this.title = data.title;
        this.poster_url = data.poster_path;
    }
    setMovieByData(data) {
        this.title = data.title;
        this.poster_url = data.poster_path;
        return this;
    }
}

export {movie};