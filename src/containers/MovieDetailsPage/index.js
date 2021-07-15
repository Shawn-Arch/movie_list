import MovieDetailsCard from "../../components/MovieDetailsCard";
import { useState, useEffect } from "react";
import { Layout } from 'antd';
import { useParams } from "react-router-dom";
import { APIs } from "../../constant/constant"
import { movie, person } from "../../util/data";
import ItemRow from "../../components/ItemRow";
const { Header, Footer, Sider, Content } = Layout;


const MovieDetailsPage = (props) => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCast, setMovieCast] = useState(null);
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

    useEffect(()=>{
        fetchDetails();
        fetchCast();
    },[])

    return (
        <Layout>
            <Content>
                {movieDetails !== null && <MovieDetailsCard movie = {movieDetails}/>}
            </Content>
            <Layout>
                <Content>
                    <ItemRow type="person" list={movieCast} title="Top Billed Cast"/>
                </Content>
                <Sider>Sider</Sider>
            </Layout>
        </Layout>);
}

export default MovieDetailsPage;