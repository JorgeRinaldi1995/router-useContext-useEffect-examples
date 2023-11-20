import styles from './Favorites.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import { useFavoriteContext } from 'context/Favorites';

function Favoritos() {


    const {favorite, setFavotites} = useFavoriteContext()

    return (
        <>
            <Banner image='favoritos' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;