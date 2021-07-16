const APIs = {
    POPULAR_MOVIES: "https://api.themoviedb.org/3/movie/popular?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    TRENDING_MOVIES: "https://api.themoviedb.org/3/trending/movie/day?api_key=37f380c84b46fa72f453af5706c78a44&page=",
    NOW_PLAYING_MOVIES: "https://api.themoviedb.org/3/movie/now_playing?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    UPCOMING_MOVIES: "https://api.themoviedb.org/3/movie/upcoming?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    TOP_RATED_MOVIES: "https://api.themoviedb.org/3/movie/top_rated?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    POPULAR_TV: "https://api.themoviedb.org/3/tv/popular?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    AIRING_TODAY_TV: "https://api.themoviedb.org/3/tv/airing_today?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    ON_THE_AIR_TV: "https://api.themoviedb.org/3/tv/on_the_air?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    TOP_RATED_TV: "https://api.themoviedb.org/3/tv/top_rated?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=",
    DETAILS_MOVIE_PART1: "https://api.themoviedb.org/3/movie/",
    DETAILS_MOVIE_PART2: "?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US",
    CAST_MOVIE_PART1: "https://api.themoviedb.org/3/movie/",
    CAST_MOVIE_PART2: "/credits?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US",
    REVIEW_MOVIE_PART1: "https://api.themoviedb.org/3/movie/",
    REVIEW_MOVIE_PART2: "/reviews?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=1",
    RECOMMENDATION_MOVIE_PART1: "https://api.themoviedb.org/3/movie/",
    RECOMMENDATION_MOVIE_PART2: "/recommendations?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&page=1",

    BASE_URL_BEGIN:'https://api.themoviedb.org/3/discover/movie?api_key=a264be857d5395c70bd597cc0e9a04b5&language=en-US&sort_by=',
    POPULARITY_DESCENDING:'popularity.desc',
    POPULARITY_ASCENDING:'popularity.asc',
    RATING_DESCENDING:'vote_average.desc',
    RATING_ASCENDING:'vote_average.asc',
    RELEASE_DATA_DESCENDING:'release_date.desc',
    RELEASE_DATA_ASCENDING:'release_date.asc',
    TITLE_A_Z:'original_title.asc',
    TITLE_Z_A:'original_title.desc',
    BASE_URL_MID:'&include_adult=false&include_video=false&page=',
    BASE_URL_END:'&with_watch_monetization_types=flatrate',
    MOVIE_SIDE_CONTENT_PART1:'https://api.themoviedb.org/3/movie/',
    MOVIE_SIDE_CONTENT_PART2:'?api_key=a264be857d5395c70bd597cc0e9a04b5&language=en-US',
    MOVIE_VIDEO_URL_PART1:'https://api.themoviedb.org/3/movie/',
    MOVIE_VIDEO_URL_PART2:'/videos?api_key=a264be857d5395c70bd597cc0e9a04b5&language=en-US'

}

export {APIs};