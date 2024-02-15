import { useReducer, useState } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { ProductContext } from "../contexts/ProductContext";
import { axiosDash } from "../config/dashAxios";

const initialValues = {
    products : [],
    alertMsg: {},
    isLoading: true
}


export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialValues)

    const [isLoading, setIsLoading] = useState(false)

    const getAllProducts = async() =>{
        setIsLoading(true)
        const { data } = await axiosDash('/products');
        const products = data.products

        // if (!products) {
        //     //dispatch error
        // }

        setIsLoading(false)
        dispatch({
            type: "ALL-PRODUCTS",
            payload:{
                products
            }
        })

        console.log(products)
    }

  return (
    <ProductContext.Provider value={{
        state,
        getAllProducts,
        isLoading
    }}>
        {children}
    </ProductContext.Provider>
  )
};
