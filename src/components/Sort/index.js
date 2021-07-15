import { Menu, Dropdown, Button} from 'antd'
const { SubMenu } = Menu;

const Sort = ({sortType,setSortType,setCurPage}) => {
    const handlePDClick = () => {
        setSortType('Popularity Descending');
        setCurPage(1);
    }
    const handlePAClick = () => {
        setSortType('Popularity Aescending');
        setCurPage(1);
    }
    const handleRDClick = () => {
        setSortType('Rating Descending');
        setCurPage(1);
    }
    const handleRAClick = () => {
        setSortType('Rating Ascending');
        setCurPage(1);
    }
    const handleRDDClick = () => {
        setSortType('Release Date Descending');
        setCurPage(1);
    }
    const handleRDAClick = () => {
        setSortType('Release Data Ascending');
        setCurPage(1);
    }
    const handleAZClick = () => {
        setSortType('Title (A-Z)');
        setCurPage(1);
    }
    const handleZAClick = () => {
        setSortType('Title (Z-A)');
        setCurPage(1);
    }
    const menu = (
        <Menu>
            <SubMenu key = 'subtitle' title='Sort Results By'>
                <Menu.Item key='Popularity Descending' onClick={handlePDClick}>Popularity Descending</Menu.Item>
                <Menu.Item key='Popularity Ascending'onClick={handlePAClick}>Popularity Ascending</Menu.Item>
                <Menu.Item key='Rating Descending' onClick={handleRDClick}>Rating Descending</Menu.Item>
                <Menu.Item key='Rating Ascending' onClick={handleRAClick}>Rating Ascending</Menu.Item>
                <Menu.Item key='Release Date Descending' onClick={handleRDDClick}>Release Date Descending</Menu.Item>
                <Menu.Item key='Release Data Ascending' onClick={handleRDAClick}>Release Data Ascending</Menu.Item>
                <Menu.Item key='Title (A-Z)' onClick={handleAZClick}>Title (A-Z)</Menu.Item>
                <Menu.Item key='Title (Z-A)' onClick={handleZAClick}>Title (Z-A)</Menu.Item>
            </SubMenu>
        </Menu>
    );
    
    return(
        <Dropdown overlay={menu}>
            <Button>{sortType}</Button>
        </Dropdown>
    )
}
export default Sort;