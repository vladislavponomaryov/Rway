const NavItem = ({item, level}) => {
    return (
        <div>
            {item.title && item.url}
        </div>
    )
}

export default NavItem