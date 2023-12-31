import styles from './Title.module.css';

function Title({ title }) {
    return (
        <div className={styles.text}>
            <h1>{title}</h1>
        </div>
    )
}

export default Title;