import { Input } from 'antd';

const { Search } = Input;

const SearchInput = ({className}) => {
    const onSearch = value => console.log(value);
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