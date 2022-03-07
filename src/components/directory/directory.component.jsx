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
                    imageUrl:'https://pixabay.com/get/g5eaa84ec28be530e46f1c180f191491969f8661bd21ea59fdcc63f7100216867f2ed85b72879614ddd9a621227f7da1627f7f398faf5d5f4952a3b20188746d1_1920.jpg',
                    id: 1
                },
                {
                    title:'Jackets',
                    imageUrl:'https://pixabay.com/get/ge27f6d1a31ff35fbe882b32b9e69f91742aabdccce8d12b2abccf56a01adef5edfa8c1910531fa054e8a7cdf67907bf775ed8b7a03dc7f1f8a6cc3eb62813727_1920.jpg',
                    id: 2
                },
                {
                    title:'Men',
                    imageUrl:'https://pixabay.com/get/ge96429eec06d68694ee6bc3904610a776970c91042ccc7e38be0a76430e691e2391aedffbff001ea6bb2a62af2af44c6_640.jpg',
                    id: 3
                },
                {
                    title:'Women',
                    imageUrl:'https://pixabay.com/get/gfc0fa8b1fe7af9b52fd0afaff55b08847fed8229d7860429c89b43ca7dbc66b0e4575cbf3a7ab1a0ff2d3b4126238e8dd7851b1ae68f608767bd27a207bb5bd3_1280.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title:'Accessories',
                    imageUrl:'https://pixabay.com/get/gf9b8e0d05e85330ab5d5f1c2ae942d8a1c012d7a3b343cfb59230e4adc6c6a11c75edb2ca152f87ba5b96c3b36679df630fffb87259985a71984a50daf2d8615_1280.jpg',
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