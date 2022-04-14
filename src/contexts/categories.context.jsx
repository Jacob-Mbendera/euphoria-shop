import { createContext, useState, useEffect } from "react";
//import PRODUCTS from "../pages/shop/shop-data.json";
import SHOP_DATA from "../pages/shop/shop-data.js";
import { addCollectionDocuments, getCategoriesAndDocument} from "../utilities/firebase/firebase.utilities"; 

export const CategoriesContext = createContext({
    categoriesMap: {},

});




export const CategoriesProvider = ( {children} ) => {
    const[categoriesMap, setCategoriesMap] = useState({});

//useEffect()must be run only once, we using this to upload shop data to firebase
   /* useEffect(() => {
        addCollectionDocuments('categories', SHOP_DATA);
    },[]) */

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoriesMap =  await getCategoriesAndDocument();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        }

        getCategoriesMap();
    }, []);

    const value = {categoriesMap}
    return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
} 