import React from "react";
import Drawer from "./Drawer";
import {Box} from "@mui/material";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <Box sx={{ display: 'flex', width: '100%'}}>
            <Header/>
            <Drawer />
            <Box component='main' sx={{width: '100%', flexGrow: 1, p: { xs: 2, sm: 3}}}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default MainLayout