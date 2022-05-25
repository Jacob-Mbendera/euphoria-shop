import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect ,Fragment} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.components';

import { useSelector } from 'react-redux';
import { selectCategoriesLoading, selectCategoriesMap } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {

    //console.log('render/re-rending categories func component');
    const {category} = useParams(); //we are using param i.e matching path in browser url 

    //const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesLoading);

    useEffect(() =>{
        //console.log('useEffect Triggered');
        setProducts(categoriesMap[category]);


    }, [category, categoriesMap]); //whenever category or categoriesMap changes

    return(
        <Fragment> 
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                isLoading ? (
                <Spinner/>
                ) : ( <div className='category-container'>
                        {   //only render products if products has value
                            products && 
                            products.map( (product) => <ProductCard key={product.id} product={product} /> )
                        }
                    </div> 
                )}
           
        </Fragment>
    )
};

export default Category;