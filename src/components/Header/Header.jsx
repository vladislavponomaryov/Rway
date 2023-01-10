import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logotype"/>
            </div>
            <div className={s.user}>
                {props.isAuth ?
                    <>
                        <span>{props.login}</span><button onClick={props.authLogout}>Log out</button>
                    </>
                    : <NavLink to='/login'>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;