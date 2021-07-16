import MovieDetailsCard from "../../components/MovieDetailsCard";
import { useState, useEffect } from "react";
import { Layout } from 'antd';
import { useParams } from "react-router-dom";
import { APIs } from "../../constant/constant"
import { movie, person } from "../../util/data";
import ItemRow from "../../components/ItemRow";
import MovieDetailsSideContent from "../../components/MovieDetailsSideContent"
import VideoContainer from "../../components/VideoContainer";
import ReviewComponent from "../../components/ReviewComponent";
import Recommedation from "../../components/Recommendation";
const { Header, Footer, Sider, Content } = Layout;

const MovieDetailsPage = (props) => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCast, setMovieCast] = useState(null);
    const [sideContent, setSideContent] = useState({
        status:'',
        spoken_languages:[],
        budget:'',
        revenue:''
    })
    const [movieReview, setMovieReview] = useState(null);
    const [movieRecommedation, setMovieRecommendation] = useState(null);
    const fetchDetails = () => {
        fetch(APIs.DETAILS_MOVIE_PART1 + id + APIs.DETAILS_MOVIE_PART2)
            .then(res=>res.json())
            .then(data=>{
                setMovieDetails(new movie(data).setDetails(data));
            })
    }

    const fetchCast = () => {
        fetch(APIs.CAST_MOVIE_PART1 + id + APIs.CAST_MOVIE_PART2)
            .then(res=>res.json())
            .then(data=>{
                setMovieCast(data.cast.map((item)=>{
                    return new person(item)
                }));
            })
    }

    const fetchSideContent = () => {
        fetch(APIs.MOVIE_SIDE_CONTENT_PART1+id+APIs.MOVIE_SIDE_CONTENT_PART2)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data.spoken_languages)
                setSideContent({
                    status:data.status,
                    spoken_languages:data.spoken_languages,
                    budget:data.budget,
                    revenue:data.revenue
                })
            })
    }

    useEffect(()=>{
        console.log(sideContent)
    },[sideContent])
    
    const fetchReviews = () =>{
        fetch(APIs.REVIEW_MOVIE_PART1 + id + APIs.REVIEW_MOVIE_PART2)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.results[0] !== undefined) {
                    setMovieReview({
                        author: data.results[0].author,
                        content: data.results[0].content,
                        created_at: data.results[0].created_at,
                        avatar_path: data.results[0].author_details.avatar_path,
                        url: data.results[0].url
                    });
                }
                else {
                    setMovieReview(null);
                }
            })
    }

    const fetchRecommendation = () =>{      
        fetch(APIs.RECOMMENDATION_MOVIE_PART1 + id + APIs.RECOMMENDATION_MOVIE_PART2)
            .then(res=>res.json())
            .then(data=>{
                setMovieRecommendation(data.results.map((item)=>{
                    return new movie(item)
                }));
            })
    }

    useEffect(()=>{
        fetchDetails();
        fetchCast();
        fetchSideContent();
        fetchReviews();
        fetchRecommendation();
    },[id])

    return (
        <Layout>
            <Content>
                {movieDetails !== null && <MovieDetailsCard movie = {movieDetails}/>}
            </Content>
            <Layout>
                <Content>
                    <ItemRow type="person" list={movieCast} title="Top Billed Cast" maxPage={4}/>
                    <VideoContainer/>
                    <ReviewComponent review={movieReview}/>
                    <Recommedation movies = {movieRecommedation}/>
                </Content>
                <Sider>
                    <MovieDetailsSideContent sideContent={sideContent}></MovieDetailsSideContent>
                </Sider>
            </Layout>
        </Layout>);
}

export default MovieDetailsPage;