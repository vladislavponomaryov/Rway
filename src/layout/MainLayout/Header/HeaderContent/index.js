import {Box, useMediaQuery} from "@mui/material";
import Search from "./Search";

const HeaderContent = () => {

    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'))

    return (
        <>
            {!matchesXs && <Search/>}
            {matchesXs && <Box sx={{width: '100%', ml: 1}}/>}
        </>
    )
}

export default HeaderContent