import React from "react";
import { withRouter } from "react-router-dom";
import './directory-item.styles.scss'


const DirectoryItem = ({title, imageUrl, size }) => {
    // <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)} {/* Dont leave spacces between Urls */}> 
   

     return(
         <div className="directory-item-container">
              <div 
                className='background-image'  

                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className="body">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> SHOP NOW</span>
            </div>
         </div>
     )
 }

export default DirectoryItem; //WithRouter() enables us to have access to history, match and other props