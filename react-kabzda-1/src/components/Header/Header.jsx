import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logotype"/>
            </div>
            <div className={s.user}>
                {props.isAuth === true ? <span>{props.login}</span> : <span>Login</span>}
            </div>
        </header>
    )
}

export default Header;