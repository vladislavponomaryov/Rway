import {List} from "@mui/material";
import NavItem from "./NavItem";

const NavGroup = ({item}) => {

    const navItem = item.children?.map(item => {
        return <NavItem key={item.id} item={item} level={1}/>
    })

    return (
        <List subheader={item.title}>
            {navItem}
        </List>
    )
}

export default NavGroup