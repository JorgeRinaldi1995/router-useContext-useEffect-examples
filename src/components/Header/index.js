import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Header.module.css';
import NavLink from "components/NavLink";

function Header() {
    return (
        <header className={styles.Header}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <NavLink url={'./'}>Home</NavLink>
                <NavLink url={'./Favorites'}>Favorites</NavLink>
            </nav>
        </header>
    )
}

export default Header;