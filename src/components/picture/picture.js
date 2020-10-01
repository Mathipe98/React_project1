import React from 'react';
import './picture.css';
import image1 from './MEME.jpg';

export class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Change class of image to highlight when image is selected
            class: 'picture',
            //For use later when matching based on images, make smart method later
            id: 'picture1',
            // style: {
            //     cursor: 'pointer',
            //     borderRadius: '5px'
            // }
        };
        //Necessary bind because React weird
        this.highlightPicture = this.highlightPicture.bind(this);
    }
    //Change class to show that image has been highlighted (changes CSS properties)
    highlightPicture() {
        // let picture = {
        //     transition: '0.3s',
        //     cursor: 'pointer',
        //     borderRadius: '3px'
        // };
        // let highlighted = {
        //     transition: '0.3s',
        //     cursor: 'pointer',
        //     borderRadius: '5px',
        //     border: '4px solid white'
        // };
        /* Pictures don't align due to margin-top in gallery.css . This can be changed later
        I.e. the border gets added when selected, and because of margin-top, other pictures beneath
        get pushed further down. */
        this.setState({
            class: (this.state.class==='picture') ? 'highlighted' : 'picture',
            //style: (this.state.class==='picture') ? highlighted : picture
        });
    }
    //Change this later to accommodate for changing IDs and more.
    render() {
        return <img 
                src={image1} 
                className={this.state.class} 
                onClick={this.highlightPicture} 
                alt="" />;
    }
}