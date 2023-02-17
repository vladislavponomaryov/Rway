import menuItems from "../../../../../menu-items";
import NavGroup from "./NavGroup";
import {Box} from "@mui/material";

const Navigation = () => {

    const navGroups = menuItems.items.map((item) => {
        return <NavGroup key={item.id} item={item} />
    })

    return (
        <Box sx={{pt:2}}>
            {navGroups}
        </Box>
    )
}

export default Navigation