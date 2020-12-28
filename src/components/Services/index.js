import React from 'react'
import Icon1 from '../../images/mice.png'
import Icon2 from '../../images/keyboard.png'
import Icon3 from '../../images/headphone.png'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id = 'services'>
            <ServicesH1>My devices</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href = 'https://www.amazon.com/s?k=g403&ref=nb_sb_noss_1'>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Mouse: Logitech g403</ServicesH2>
                    <ServicesP> One of the best mice 2017/2018 and I like her shape    </ServicesP>
                </ServicesCard>
                <ServicesCard href = 'https://www.amazon.com/s?k=skyloong+sk64&crid=3OTEO8A6T4VVG&sprefix=skyloo%2Caps%2C262&ref=nb_sb_noss_1'>
                    <ServicesIcon src = {Icon2}/>
                    <ServicesH2>Keyboard: SkyLoong SK64 </ServicesH2>
                    <ServicesP> I guess It is one of the best keyboard for this price! It's 65% Keyboard btw ~70$ </ServicesP>
                </ServicesCard >
                <ServicesCard href = 'https://www.amazon.com/s?k=hyperx+cloud+alpha&crid=VJX3DID3SCT1&sprefix=hyperx+cloud+a%2Caps%2C275&ref=nb_sb_ss_ts-do-p_1_14'>
                    <ServicesIcon src = {Icon3}/>
                    <ServicesH2>Headphone: Cloud Alpha</ServicesH2>
                    <ServicesP> Perfect headphone for my head and actually one of the best headphone  </ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
