import React from 'react'
// import Icon1 from './images/svg1.svg'
// import Icon2 from './images/svg1.svg'
// import Icon3 from './images/svg1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={require(Icon1)} /> */}
                    {/* <img src="./images/svg1.svg" alt="dfs" /> */}
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon2} /> */}
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>You can access our plat form any where in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon3} /> */}
                    <ServicesH2>Premuim Benefits</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
