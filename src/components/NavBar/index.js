import { useState } from 'react';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const NavBar = () => {
    const [selected, setSelected] = useState("");

    const handleClick = (e) => {
        setSelected(e.key)
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[selected]} mode="horizontal">
            <Menu.SubMenu key="Movie" title="Movies">
                <Menu.Item key="popular">
                    Popular
                </Menu.Item>
                <Menu.Item key="playing">
                    Now Playing
                </Menu.Item>
                <Menu.Item key="upcoming">
                    Upcoming
                </Menu.Item>
                <Menu.Item key="top">
                    Top Rated
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="TV" title="TV Shows">
                <Menu.Item key="popular_TV">
                    Popular
                </Menu.Item>
                <Menu.Item key="playing_TV">
                    Airing Today
                </Menu.Item>
                <Menu.Item key="on_TV">
                    On TV
                </Menu.Item>
                <Menu.Item key="top_TV">
                    Top Rated
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="MyList" title="My List">
                <Menu.Item key="liked">
                    Liked List
                </Menu.Item>
                <Menu.Item key="blocked">
                    Blocked List
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="External" title="External Links">
                <Menu.Item key="IMDB">
                    <a href="https://www.themoviedb.org/" target="_blank">IMDB</a>
                </Menu.Item>
                <Menu.Item key="MovieDB">
                    <a href="https://www.imdb.com/" target="_blank">The Movie DB</a>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
      );
}

export default NavBar;