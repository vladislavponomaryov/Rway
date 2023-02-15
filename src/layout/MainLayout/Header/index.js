import {AppBar, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";

import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import HeaderContent from "./HeaderContent";
import AppBarStyled from "./AppBarStyled";

const Header = ({open, handleDrawerToggle}) => {
    const theme = useTheme()
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

    const iconBackColor = 'grey.100';
    const iconBackColorOpen = 'grey.200';

    const mainHeader = (
        <Toolbar>
            <IconButton
            disableRipple
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            edge="start"
            color='secondary'
            sx={{color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2}}}
            >
                { !open ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
            </IconButton>
            <HeaderContent/>
        </Toolbar>
    )

    const appBar = {
        position: 'fixed',
        color: 'inherit',
        elevation: 0,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`
        }
    }

    return (
        <>
            {!matchDownMD ? (
                <AppBarStyled open={open} {...appBar}>
                    {mainHeader}
                </AppBarStyled>
            ) : (
                <AppBar {...appBar}>
                    {mainHeader}
                </AppBar>
            )}
        </>
    )
}

export default Header