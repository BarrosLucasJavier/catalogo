
import styles from './cardProduct.module.css'
import PropTypes from 'prop-types'


const CardProduct = ({ product }) => {

    
    return (
        <div className={styles.cardContainer}>
            <img src={product.image}/>
            <p>{product.product_name}</p>
        </div>
    );
}
CardProduct.propTypes = {
    product: PropTypes.object.isRequired
}
export default CardProduct;
