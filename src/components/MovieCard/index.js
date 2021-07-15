import { Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const MovieCard = ({movie}) => {
    return (
    <Link to={"/movie/"+movie.id}>
        <Card
            hoverable
            cover={<img alt={movie.title} src={movie.poster_path} />}>
            <Meta title={movie.title} description={movie.release_date} />
        </Card>
    </Link>)
}

export default MovieCard;