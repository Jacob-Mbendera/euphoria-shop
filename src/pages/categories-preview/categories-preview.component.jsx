import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useSelector } from "react-redux";
import { selectCategoriesLoading, selectCategoriesMap } from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {

    //const {categoriesMap} =useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesLoading);

    return(
        <Fragment>
            {
            isLoading ? (
            <Spinner/> 
            ) : (
                    Object.keys(categoriesMap).map( (title) => {
                    //The reason we are giving title as  key is because this is an objecte.i.e using hashtable instead of array
                    const products = categoriesMap[title];
                    
                    return  <CategoryPreview key={title} title={title} products={products} />
                })
            )
            }
        </Fragment>
    
    );
}


export default CategoriesPreview;