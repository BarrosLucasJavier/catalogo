
import styles from './cardProduct.module.css'
import PropTypes from 'prop-types'


const CardProduct = ({ product }) => {

    
    return (
        <div className={styles.cardContainer}>
            <img src={product.image}/>
            <div className={styles.infoContainer}>
                <p>{product.product_name}</p>
            </div>
        </div>
    );
}
CardProduct.propTypes = {
    product: PropTypes.object.isRequired
}
export default CardProduct;
