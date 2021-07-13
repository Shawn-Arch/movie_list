class movie {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.poster_path = "https://image.tmdb.org/t/p/w185" + data.poster_path;
        this.backdrop_path = "https://image.tmdb.org/t/p/w1280" + data.backdrop_path;
    }
    setMovieByData(data) {
        this.id = data.id;
        this.title = data.title;
        this.poster_path = "https://image.tmdb.org/t/p/w185" + data.poster_path;
        this.backdrop_path = "https://image.tmdb.org/t/p/w1280" + data.backdrop_path;
        return this;
    }
}

export {movie};