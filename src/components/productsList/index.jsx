import { useProducts } from '../../hook/products.hook';
import CardProduct from '../cardProduct';
import FilterBar from '../filterBar';
import styles from './productList.module.css'

const ProductList = () => {

    const { products } = useProducts()

    return (
        <main className={styles.mainContainer}>
            <FilterBar/>
            <div className={styles.cardsContainer}>
                {products.map((product, index) =>{
                    return ( <CardProduct key={index} product={product}/> )
                })}
            </div>
        </main>
    );
}

export default ProductList;
