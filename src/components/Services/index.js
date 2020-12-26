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
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Mouse: Logitech g403</ServicesH2>
                    <ServicesP> One of the best mice 2017/2018 and I like her shape    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                    <ServicesH2>Keyboard: SkyLoong SK64 </ServicesH2>
                    <ServicesP> I guess It is one of the best keyboard for this price! It's 65% Keyboard btw ~70$ </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                    <ServicesH2>Headphone: Cloud Alpha</ServicesH2>
                    <ServicesP> Perfect headphone for my head and actually one of the best headphone  </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
