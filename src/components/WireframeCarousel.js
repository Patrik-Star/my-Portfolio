import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import screenshot from '../images/wireframeScreenshot.png';

class WireframeCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop={true} autoPlay={true} interval='4000' showIndicators={true} showThumbs={false} >
                <div>
                    <img loading='lazy' src={screenshot} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img loading='lazy' src={screenshot} alt=""/>
                    
                </div>
                <div>
                    <img loading='lazy' src={screenshot} alt=""/>
                    
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default WireframeCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>