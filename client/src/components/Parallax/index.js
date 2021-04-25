import React from "react"
import { Parallax } from 'react-parallax';
import Image from "/Users/davidroman/Desktop/react_portfolio/src/images/profile.jpg"

const ParallaxImage = () => {
    return(
    <Parallax bgImage={Image} strength={200} >
        <div style={{height: 350}}>
        </div>
    </Parallax>
    
    )
}

export default ParallaxImage