import React from "react";
import { withRouter } from "react-router-dom";
import './category-item.styles.scss'


const CategoryItem = ({title, imageUrl, size }) => (
    // <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)} {/* Dont leave spacces between Urls */}> 
   
    
    <div className={`${size} menu-item`}  > 
        <div 
            className='background-image'  

            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle"> SHOP NOW</span>
        </div>

    
     </div>
)

export default CategoryItem; //WithRouter() enables us to have access to history, match and other props