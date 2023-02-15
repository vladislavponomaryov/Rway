import {useEffect, useState} from "react";
import MainDrawer from "./Drawer";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {openDrawer} from "../../store/reducers/menu";

const MainLayout = () => {

    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'))
    const dispatch = useDispatch()

    const { drawerOpen } = useSelector((state) => state.menu)

    //drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open)
        dispatch(openDrawer({drawerOpen: !open}))
    }

    //set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG)
        dispatch(openDrawer({drawerOpen: !matchDownLG}))
    },[matchDownLG])

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen)
    },[drawerOpen])

    return (
        <Box sx={{ display: 'flex', width: '100%'}}>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <MainDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box component='main' sx={{width: '100%', flexGrow: 1, p: { xs: 2, sm: 3}}}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default MainLayout