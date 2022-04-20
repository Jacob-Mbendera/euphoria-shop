import React from "react";
import { withRouter } from "react-router-dom";
import './directory-item.styles.scss';
import { useNavigate } from "react-router-dom";




const DirectoryItem = ({title, imageUrl,route, size }) => {
    // <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)} {/* Dont leave spacces between Urls */}> 
    const navigate  = useNavigate();

    const onNavigateHandler = () => navigate(route)

     return(
         <div className="directory-item-container" onClick={onNavigateHandler}>
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