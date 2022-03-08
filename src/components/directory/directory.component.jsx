import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component{
    constructor(){
        super();


        this.state = {

            sections: [

                {
                    title:'Hats',
                    imageUrl:'https://i.insider.com/61d337cc99a7690019de68b0?width=1000&format=jpeg&auto=webp',
                    id: 1
                },
                {
                    title:'Jackets',
                    imageUrl:'https://printify.com/wp-content/uploads/2021/07/Custom-Jackets-for-creative-individuals.png',
                    id: 2
                },
                {
                    title:'Men',
                    imageUrl:'https://manofmany.com/wp-content/uploads/2016/06/Feature-2.png',
                    id: 3
                },
                {
                    title:'Women',
                    imageUrl:'https://media.glamour.com/photos/612e5f796a8b1f686297fc33/master/w_1920%2Cc_limit/Untitled%2520-%25202021-08-31T125721.836.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title:'Accessories',
                    imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-accessories-1516305397.jpg',
                    size: 'large',
                    id: 5
                }

            ]
        };
    }

    render(){

        return(
            <div className="directory-menu">

                {this.state.sections.map(({title,imageUrl, id, size}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}

            </div>
        )

    }
}
export default Directory;