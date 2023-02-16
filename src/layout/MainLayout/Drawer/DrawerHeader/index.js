import {Stack, useTheme} from "@mui/material";
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import Logo from "../../../../components/Logo";

const DrawerHeader = ({open}) => {
    const theme = useTheme()

    return (
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction='row' spacing={1} alignItems='center'>
                <Logo/>
            </Stack>
        </DrawerHeaderStyled>
    )
}

export default DrawerHeader