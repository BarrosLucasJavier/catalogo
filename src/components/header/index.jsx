import maniqui from '../../assets/images/maniqui.png'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <h1>CATÁLOGO</h1>
            <div className={styles.sloganContainer}>
                <h3>Ropa única para personas únicas</h3>
            </div>
            <img className={styles.maniqui} src={maniqui} alt='Maniqui'/>
        </header>
    );
}

export default Header;
