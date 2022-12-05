import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<nav className={s.nav}>
        <div className={`${s.item}`}><NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : s.link)}>
            Profile
        </NavLink></div>
        <div className={s.item}><NavLink to='/dialogs' className={({ isActive }) => (isActive ? s.active : s.link)}>Messages</NavLink></div>
        <div className={s.item}><NavLink to='/users' className={({ isActive }) => (isActive ? s.active : s.link)}>Users</NavLink></div>
        <div className={s.item}><NavLink to='/news' className={({ isActive }) => (isActive ? s.active : s.link)}>News</NavLink></div>
        <div className={s.item}><NavLink to='/music' className={({ isActive }) => (isActive ? s.active : s.link)}>Music</NavLink></div>
        <div className={s.item}><NavLink to='/settings' className={({ isActive }) => (isActive ? s.active : s.link)}>Settings</NavLink></div>
    </nav>)
}

export default Navbar;