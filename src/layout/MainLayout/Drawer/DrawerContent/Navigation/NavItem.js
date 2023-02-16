import {Box, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";

//{item.title && item.url}

const NavItem = ({item, level}) => {
    return (
        <ListItemButton>
            <ListItemText>
                { item.icon && (
                    <ListItemIcon>
                        <Box component={item.icon}/>
                    </ListItemIcon>
                )}
                <Typography>
                    {item.title}
                </Typography>
            </ListItemText>
        </ListItemButton>
    )
}

export default NavItem