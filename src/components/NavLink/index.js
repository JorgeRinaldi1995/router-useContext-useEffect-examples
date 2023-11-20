import { Link } from 'react-router-dom';
import styles from './NavLink.module.css';

function NavLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default NavLink;