import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {

    //const {categoriesMap} =useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);

    return(
        <Fragment>
            {Object.keys(categoriesMap).map( (title) => {
                const products = categoriesMap[title];
                //The reason we are giving title as  key is because this is an objecte.i.e using shashtable instead of array
                return  <CategoryPreview key={title} title={title} products={products} />
            })}
        </Fragment>
    
    );
}


export default CategoriesPreview;