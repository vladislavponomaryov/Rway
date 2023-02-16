import {ButtonBase, Link, Typography} from "@mui/material";
import config from "../../config"
import Logo from "./Logo";

const LogoSection = ({sx,to}) => (
    <ButtonBase component={Link} underline='none' to={!to ? config.defaultPath : to} sx={sx}>
        <Logo/>
        <Typography variant='h3' sx={{color: config.color.logo,ml: 1}}>{config.projectName}</Typography>
    </ButtonBase>
)

export default LogoSection