import {AppBar, IconButton, Toolbar} from "@mui/material";

import {MenuUnfoldOutlined} from '@ant-design/icons'
import HeaderContent from "./HeaderContent";

const Header = () => {

    const mainHeader = (
        <Toolbar>
            <IconButton
            disableRipple
            aria-label='open drawer'
            edge="start"
            color='secondary'
            >
                <MenuUnfoldOutlined/>
            </IconButton>
            <HeaderContent/>
        </Toolbar>
    )

    return (
        <>
            <AppBar>
                {mainHeader}
            </AppBar>
        </>
    )
}

export default Header