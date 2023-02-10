import menuItems from "../../../../../menu-items";
import NavGroup from "./NavGroup";

const Navigation = () => {

    const navGroups = menuItems.items.map((item) => {
        return <NavGroup key={item.id} item={item} />
    })

    return (
        <div>
            {navGroups}
        </div>
    )
}

export default Navigation