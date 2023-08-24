import { useProducts } from '../../hook/products.hook';
import CardProduct from '../cardProduct';
import FilterBar from '../filterBar';
import styles from './productList.module.css'

const ProductList = () => {

    const { products } = useProducts()

    return (
        <main className={styles.mainContainer}>
            <FilterBar/>
            {products.map((product, index) =>{
                return ( <CardProduct key={index} product={product}/> )
            })}
        </main>
    );
}

export default ProductList;
