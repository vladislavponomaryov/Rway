import DrawerContent from "./DrawerContent";
import {Box, Drawer, useMediaQuery, useTheme} from "@mui/material";
import {useMemo} from "react";
import DrawerHeader from "./DrawerHeader";
import MiniDrawerStyled from "./MiniDrawerStyled";

const MainDrawer = ({ open, handleDrawerToggle, window}) => {

    const theme = useTheme()
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

    // responsive drawer container
    const container = window !== undefined ? () => window().document.body : undefined

    // header content
    const drawerContent = useMemo(() => <DrawerContent/>,[])
    const drawerHeader = useMemo(() => <DrawerHeader open={open} />,[open])

    return (
        <Box component='nav' sx={{flexShrink: {md:0}, zIndex: 1300}} aria-label="mailbox folders">
            {!matchDownMD ? (
                <MiniDrawerStyled variant="permanent" open={open}>
                    {drawerHeader}
                    {drawerContent}
                </MiniDrawerStyled>
            ) : (
                <Drawer
                    container={container}
                >
                    {open && <DrawerHeader open={open}/>}
                    {open && <DrawerContent/>}
                </Drawer>
            )}
        </Box>
    )
}

export default MainDrawer