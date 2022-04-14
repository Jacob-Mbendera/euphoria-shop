import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const {categoriesMap} =useContext(CategoriesContext);

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