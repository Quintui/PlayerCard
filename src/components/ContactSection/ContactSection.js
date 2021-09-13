import React from 'react'
import { Button2 } from '../ButtonElements'
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
 } from './ContactElements';


const ContactSection = ({ 
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
    forSecond}) => {
    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart} forSecond={forSecond}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine}</Heading>
                  <SubTitle darkText={darkText}>{discription}</SubTitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
}

export default ContactSection
