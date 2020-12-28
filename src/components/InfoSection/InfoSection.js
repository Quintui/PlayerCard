import React from 'react'
import { Button } from '../ButtonElements'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    BtnWrap,
    ImgWrap,
    Img
 } from './InfoElements';



const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine, 
    lightText, 
    headLine,
    darkText,
    discription,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2, 
    forSecond,
    section
}) => {
  
    return (
        
        <>
            <InfoContainer lightBg ={lightBg} id ={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart} forSecond = {forSecond}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading  lightText = {lightText}>{headLine}</Heading>
                                <SubTitle darkText = {darkText}>{discription}</SubTitle>
                                <BtnWrap>
                                    <Button 
                                 to= {section}
                                    duration = {500}
                                    smooth = 'true'
                                    spy = 'true'
                                    exact= "true"
                                    offset = {-80}
                                    primary = {primary ? 1 : 0 }
                                    dark = {dark ? 1 : 0}
                                    dark2 = {dark2 ? 1 : 0}
                                    
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src = {img} alt = {alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
         
        </>
    )
}

export default InfoSection
