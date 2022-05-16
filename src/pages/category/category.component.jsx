import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect ,Fragment} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.components';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {


    const {category} = useParams();

    //const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() =>{

        setProducts(categoriesMap[category]);


    }, [category, categoriesMap]); //whenever category or categoriesMap changes

    return(
        <Fragment>  

        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {   //only render products if products has value
                products && 
                products.map( (product) => <ProductCard key={product.id} product={product} /> )
            }
        </div>

        </Fragment>
    )
};

export default Category;