import React, {useState} from 'react';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

 
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay muted loop src = {Video}></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1 
            
                
                > Welcome to my ' Player Card ' 😈  </HeroH1>
                <HeroP  > You can find out more about me if you click on the button below  </HeroP>
            <HeroBtnWrapper>
                <Button
                 to = 'about' 
                primary = "true"
                onMouseEnter = {onHover} 
                onMouseLeave = {onHover}
                smooth ='true'
                duration ={1000}
                spy = 'true'
                exact = 'true'
                offset = {-80}
                > Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
