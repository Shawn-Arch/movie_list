import { Input } from 'antd';

const { Search } = Input;

const SearchInput = ({className}) => {
    const onSearch = (value) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=37f380c84b46fa72f453af5706c78a44&language=en-US&query=${value}&page=1&include_adult=false`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
    }
    return (
        <Search
            className = {className}
            placeholder="search for a movie or tv show" 
            onSearch={onSearch}
            allowClear
            loading = {false}
            enterButton="search"
        />);
}

export default SearchInput;