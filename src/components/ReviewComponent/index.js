import { Avatar } from 'antd';

const ReviewComponent = ({review}) => {
    if (review === null) return (<></>);
    return (
        <>
            <header>Top Review</header>
            <Avatar src={review.avatar_path.slice(1)} />
            <p>A review by {review.author}</p>
            <p>Written by {review.author} on {review.created_at.slice(0,10)}</p>
            <p>{review.content}</p>
        </>);
}

export default ReviewComponent;