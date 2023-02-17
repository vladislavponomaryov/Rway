import Navigation from "./Navigation";
import SimpleBar from "../../../../components/third-praty/SimpleBar";

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
            <Navigation/>
        </SimpleBar>
    )
}

export default DrawerContent