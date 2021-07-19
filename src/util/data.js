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
        this.vote_average = data.vote_average;
        if (data.release_date === undefined) {
            this.release_date = data.first_air_date;
        } 
        else {
            this.release_date = data.release_date;
        }
        this.liked = false;
        this.blocked = false;
    }
    setDetails(data) {
        this.runtime = data.runtime;
        this.video = data.video;
        this.production_companies = data.production_companies;
        this.genres = data.genres;
        this.adult = data.adult;
        this.tagline = data.tagline;
        this.overview = data.overview;
        return this;
    }
    like() {
        this.liked = true;
        return this
    }
    block() {
        this.blocked = true;
        return this
    }
}

class person {
    constructor(data) {
        this.name = data.name;
        this.character = data.character;
        this.profile_path = "https://image.tmdb.org/t/p/w185" + data.profile_path;
    }
}

export {movie, person};