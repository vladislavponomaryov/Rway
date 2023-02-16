import Navigation from "./Navigation";
import SimpleBar from "simplebar-react";

const DrawerContent = () => {
    return (
        <SimpleBar
            sx={{
                '& .simplebar-content': {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <Navigation />
        </SimpleBar>
    )
}

export default DrawerContent