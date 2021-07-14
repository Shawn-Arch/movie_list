import { Menu, Dropdown, Button} from 'antd'
const { SubMenu } = Menu;

const Sort = () => {
    const menu = (
        <Menu>
            <SubMenu title='Sort Results By'>
                <Menu.Item>Popularity Descending</Menu.Item>
                <Menu.Item>Popularity Descending</Menu.Item>
                <Menu.Item>Rating Descending</Menu.Item>
                <Menu.Item>Rating Ascending</Menu.Item>
                <Menu.Item>Release Date Descending</Menu.Item>
                <Menu.Item>Release Data Ascending</Menu.Item>
                <Menu.Item>Title (A-Z)</Menu.Item>
                <Menu.Item>Title (Z-A)</Menu.Item>
            </SubMenu>
        </Menu>
    );
    return(
        <Dropdown overlay={menu}>
            <Button>Filter</Button>
        </Dropdown>
    )
}
export default Sort;