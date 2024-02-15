import { useReducer } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { ProductContext } from "../contexts/ProductContext";
import { axiosDash } from "../config/dashAxios";

const initialValues = {
    products : [],
    alertMsg: {},
}


export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialValues)

    const getAllProducts = async() =>{
        const { data } = await axiosDash('/products');
        const products = data.products

        // if (!products) {
        //     //dispatch error
        // }
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
        getAllProducts
    }}>
        {children}
    </ProductContext.Provider>
  )
};
