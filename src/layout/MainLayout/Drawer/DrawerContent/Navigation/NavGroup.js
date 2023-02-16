import {Box, List, Typography} from "@mui/material";
import NavItem from "./NavItem";
import {useSelector} from "react-redux";

const NavGroup = ({item}) => {
    const menu = useSelector(state => state.menu)
    const {drawerOpen} = menu

    const navItem = item.children?.map(item => {
        return <NavItem key={item.id} item={item} level={1}/>
    })

    return (
        <List subheader={
            item.title &&
            drawerOpen && (
                <Box sx={{pl: 3, mb: 1.5}}>
                    <Typography variant='subtitle2' color='textSecondary'>
                        {item.title}
                    </Typography>
                </Box>
            )}
              sx={{mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0}}>
            {navItem}
        </List>
    )
}

export default NavGroup