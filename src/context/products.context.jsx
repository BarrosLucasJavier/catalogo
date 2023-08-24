import { createContext, useEffect, useState } from "react";
import data from '../data/data.json'
import PropTypes from 'prop-types'


export const ProductsContext = createContext();

export const ProductsProvider = ({children}) =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data)
    }, []);


    const setProductsFunction = (filter) =>{
        console.log(filter);
        if (filter === "Seleccione una categoria") {
            setProducts(data)
        } else {
            const filtered = data.filter(items => items.category === filter.toLowerCase())
            setProducts(filtered)
        }
    }

    const productsValues = {
        products,
        setProductsFunction,
        setProducts
    }

    return (
        <ProductsContext.Provider value={productsValues}>
            {children}
        </ProductsContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}