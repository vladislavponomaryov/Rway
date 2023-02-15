import {useMediaQuery} from "@mui/material";
import Search from "./Search";

const HeaderContent = () => {

    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'))

    return (
        <>
            {!matchesXs && <Search/>}
        </>
    )
}

export default HeaderContent