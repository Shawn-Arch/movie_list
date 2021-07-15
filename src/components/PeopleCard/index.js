import { Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const PeopleCard = ({person}) => {
    return (
        <Card
            hoverable
            cover={<img alt={person.name} src={person.profile_path} />}>
            <Meta title={person.name} description={person.character} />
        </Card>);
}

export default PeopleCard;