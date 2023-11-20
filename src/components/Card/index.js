import { useFavoriteContext } from 'context/Favorites';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png'
import { Link } from 'react-router-dom'

function Card({ id, title, bg }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? unfavoriteIcon  : favoriteIcon;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={bg} alt={title} className={styles.bg} />
                <h2>{title}</h2>
            </Link>
            <img src={icon}
                alt="favorite filme"
                className={styles.favorite}
                onClick={() => {
                    addFavorite({ id, title, bg })
                }}
            />
        </div>

    )
}

export default Card;