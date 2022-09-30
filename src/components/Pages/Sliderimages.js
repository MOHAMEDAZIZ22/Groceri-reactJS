import React from 'react';
import './Sliderimages.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import bannerimg from '../../components/images/bannerimg.jpg'
import bannerimg1 from '../images/bannerimg1.jpg'
import bannerimg3 from '../images/bannerimg3.jpg'

const slides = [
    {
        image: bannerimg
    },

    {
        image: bannerimg1
    },

    {
        image: bannerimg3
    },

    {
        image: bannerimg1
    },
]

export default function Slider() {

    return (
        <div className="slider-container">
            <Slide>
                {slides.map((slides, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slides.image} width={1600} />
                    </div>
                ))}
            </Slide>
        </div>

    );
}