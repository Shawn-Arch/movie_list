import { Card } from 'antd';

const { Meta } = Card;

const MovieCard = ({movie}) => {
    return (
    <Card
        hoverable
        cover={<img alt={movie.title} src={movie.poster_path} />}>
        <Meta title={movie.title} description={movie.release_date} />
    </Card>)
}

export default MovieCard;