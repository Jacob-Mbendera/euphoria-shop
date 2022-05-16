
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../pages/categories-preview/categories-preview.component";
import Category from "../../pages/category/category.component";
import './shop.styles.scss';
import { useEffect } from "react";
import { getCategoriesAndDocument } from "../../utilities/firebase/firebase.utilities";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { selectCategoriesMap } from "../../store/categories/categories.selector"; 
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoriesMap =  await getCategoriesAndDocument();
            //console.log(categoriesMap);
            dispatch(setCategoriesMap(categoriesMap));
        }

        getCategoriesMap();
    }, []);

    return(
            <Routes>
                <Route index element={<CategoriesPreview/>} />
                <Route path=":category" element={<Category/>} />
            </Routes>
        );
}


export default Shop;