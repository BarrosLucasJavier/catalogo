import Categories from '../../data/data'
import { useProducts } from '../../hook/products.hook'
import styles from './filterBar.module.css'

const FilterBar = () => {

    const { setProductsFunction } = useProducts()
    const handleSelect = (e) => {
        setProductsFunction(e.target.value);
    }

    return (
        <section className={styles.filterContainer}>
            <select onChange={handleSelect}>
                <option>Seleccione una categoria</option>
                {Categories.map((category, index) => {
                    return (<option value={category} key={index}>{category}</option>)
                })}
            </select>
        </section>
    );
}

export default FilterBar;
