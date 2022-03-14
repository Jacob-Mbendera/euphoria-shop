import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component"; 

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>

        <div className="preview">
            {
            items
            .filter((item, index) => index < 4) //displays 4 items
            .map( ({id, ...otherItemsProps}) => (
                //<div key={item.id}> {item.name} </div>
                <CollectionItem key={id} {...otherItemsProps}/>
            ))
            }

        </div>

    </div>
)

export default CollectionPreview;