 import {createContext, useState} from'react'
 import productData from '../productData';

 const ProductContext = createContext();

 export function ProductProvider({children}){

    const [products, setProducts] = useState(productData)
    const [basket, setBasket] = useState([])

    const addToBasket = (item) =>{
        setBasket((prevState) => [...prevState, item])
    }

    return (
        <ProductContext.Provider value={{
            products,
            basket,
            addToBasket,
            }} >
            {children}
        </ProductContext.Provider>
    )
 }

 export default ProductContext