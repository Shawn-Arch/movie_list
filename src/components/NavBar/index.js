import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import SearchInput from '../SearchInput';
import logo from '../../asset/TMDB.png';
import './index.scss';


const NavBar = () => {
    const [selected, setSelected] = useState("");
    const [searchFlag, setSearchFlag] = useState(false);

    const handleSearchClick = () => {
        setSearchFlag(!searchFlag);
    }

    const handleMenuClick = (e) => {
        setSelected(e.key);
    }

    return (
        <div>
            <Link to="/"><img src={logo} alt="homepage" className="logo" onClick={()=>{setSelected("")}}/></Link>
            {!searchFlag ? 
            <SearchOutlined className="search-icon" onClick={handleSearchClick}/>: 
            <>
                <SearchInput className="search-bar"/>
                <CloseOutlined className="search-icon" onClick={handleSearchClick}/>
            </>}
            <Menu onClick={handleMenuClick} selectedKeys={selected} mode="horizontal" theme="dark" className="nav-bar">
                <Menu.SubMenu key="Movie" title="Movies" className="">
                    <Menu.Item key="popular">
                        <Link to="/movie">Popular</Link>
                    </Menu.Item>
                    <Menu.Item key="playing">
                        <Link to="/movie/now-playing">Now Playing</Link>
                    </Menu.Item>
                    <Menu.Item key="upcoming">
                        <Link to="/movie/upcoming">Upcoming</Link>
                    </Menu.Item>
                    <Menu.Item key="top">
                        <Link to="/movie/top-rated">Top Rated</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="TV" title="TV Shows">
                    <Menu.Item key="popular_TV">
                        <Link to="/tv">Popular</Link>
                    </Menu.Item>
                    <Menu.Item key="playing_TV">
                        <Link to="/tv/airing-today">Airing Today</Link>
                    </Menu.Item>
                    <Menu.Item key="on_TV">
                        <Link to="/tv/on-the-air">On TV</Link>
                    </Menu.Item>
                    <Menu.Item key="top_TV">
                        <Link to="/tv/top-rated">Top Rated</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="MyList" title="My List">
                    <Menu.Item key="liked">
                        <Link to="/my-list/liked">Liked List</Link>
                    </Menu.Item>
                    <Menu.Item key="blocked">
                        <Link to="/my-list/blocked">Blocked List</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="External" title="External Links">
                    <Menu.Item key="IMDB">
                        <a href="https://www.themoviedb.org/">The Movie DB</a>
                    </Menu.Item>
                    <Menu.Item key="MovieDB">
                        <a href="https://www.imdb.com/">IMDB</a>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
      );
}

export default NavBar;