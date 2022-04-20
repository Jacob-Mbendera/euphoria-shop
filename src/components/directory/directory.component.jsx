import React from "react";
import './directory.styles.scss';
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [

    {
        title:'Hats',
        imageUrl:'https://i.insider.com/61d337cc99a7690019de68b0?width=1000&format=jpeg&auto=webp',
        id: 1,
        linkUrl: 'hats',
        route: 'shop/hats'
    },
    {
        title:'Jackets',
        imageUrl:'https://printify.com/wp-content/uploads/2021/07/Custom-Jackets-for-creative-individuals.png',
        id: 2,
        linkUrl: '',
        route: 'shop/jackets'
    },
    {
        title:'Men',
        imageUrl:'https://manofmany.com/wp-content/uploads/2016/06/Feature-2.png',
        id: 3,
        linkUrl: '',
        route: 'shop/mens'
        
    },
    {
        title:'Women',
        imageUrl:'https://i.pinimg.com/736x/84/30/60/843060f78f619970c6a06d65aae5db0c.jpg',
        size: 'large',
        id: 4,
        linkUrl: '',
        route: 'shop/womens'
    },
    {
        title:'Accessories',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-accessories-1516305397.jpg',
        size: 'large',
        id: 5,
        linkUrl: '',
        route: 'shop/accesories'
    }

]


const Directory =()=> {

    

        return(
            <div className="directory-container">

                {categories.map(({id, ...othersectionprops}) =>(
                    <DirectoryItem key={id} {...othersectionprops} /> //  {...othersectionprops} = title={title} imageUrl={imageUrl} size={size}
                ))}

            </div>
        )
     }
export default Directory;