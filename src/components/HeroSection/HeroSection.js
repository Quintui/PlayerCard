import React, {useState} from 'react'
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
                <HeroH1>Easy peasy lemon squeezy</HeroH1>
                <HeroP> I'm the best player in the World</HeroP>
            <HeroBtnWrapper>
                <Button to = 'signup' 
                primary = {true}
                onMouseEnter = {onHover} 
                onMouseLeave = {onHover}>
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
