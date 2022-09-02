import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logotype"/>
        </header>
    )
}

export default Header;