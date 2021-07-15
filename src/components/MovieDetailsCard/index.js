import { Progress, Space, Layout } from 'antd';
import { HeartTwoTone, DeleteTwoTone } from '@ant-design/icons';
const { Sider, Content } = Layout;

const MovieDetailsCard = ({movie})=> {
    return(
    <Layout>
        <Sider>
            <img src={movie.poster_path} alt={movie.title}/>
        </Sider>
        <Content>
            <Space direction="vertical">
                <header>{movie.title + '(' +movie.release_date.slice(0,4) + ')'}</header>
                <Space>
                    <span>{movie.adult ? "PG" : "PG13"}</span>
                    <span>{movie.release_date}</span>
                    <span>
                        {movie.genres.map((item)=>{
                            return (<button key={item.id}>{item.name}</button>)
                        })}
                    </span>
                    <span>{movie.runtime}</span>
                </Space>
                <Space>
                    <Progress type="circle" percent={movie.vote_average * 10} width={50} />
                    <HeartTwoTone twoToneColor="#eb2f96" />
                    <DeleteTwoTone twoToneColor="blue"/>
                </Space>
                <p>{movie.tagline}</p>
                <header>Overview</header>
                <p>{movie.overview}</p>
                <Space>
                    {movie.production_companies.map((item)=>{
                        return(<span key={item.id}>{item.name}</span>);
                    })}
                </Space>
            </Space>
        </Content>
    </Layout>);
}

export default MovieDetailsCard