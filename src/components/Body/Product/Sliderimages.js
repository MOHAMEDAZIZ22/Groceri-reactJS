import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import bannerimg from '../../images/Bev.jpg'


// const Slideshow = () => {
//     return (
//         <div className="slide-container">
//             <Slide>
//                 {slideImages.map((slideImage, index) => (
//                     <div className="each-slide" key={index}>
//                         <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//                             <span>{slideImage.caption}</span>
//                         </div>
//                     </div>
//                 ))}
//             </Slide>
//         </div>
//     )
// }
// export default Slideshow;


const slides = [
    {
        image: bannerimg
    },
    {
        image: bannerimg
    },
    {
        image: bannerimg
    },
    {
        image: bannerimg
    },
]
export default function Sliderimg() {
    return (
        <div className="slider-container">
            <Slide>
                {slides.map((slides, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slides.image} width={1366} />
                    </div>
                ))}
            </Slide>
        </div>

    );
}