class movie {
    constructor(data) {
        this.id = data.id;
        if(data.title === undefined) {
            this.title = data.name;
        }
        else {
            this.title = data.title;
        }
        this.poster_path = "https://image.tmdb.org/t/p/w185" + data.poster_path;
        this.backdrop_path = "https://image.tmdb.org/t/p/w1280" + data.backdrop_path;
        if (data.release_date === undefined) {
            this.release_date = data.first_air_date;
        } 
        else {
            this.release_date = data.release_date;
        }
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