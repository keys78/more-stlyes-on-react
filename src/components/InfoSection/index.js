import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, Column1, InfoRow, Column2, 
    TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, img, topLine, lightText, headLine, darkText, description, buttonLabel, alt,
                      primary, dark, dark2,    }) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                       <TextWrapper>
                           <TopLine >{ topLine }</TopLine>
                           <Heading lightText={lightText}>{ headLine }</Heading>
                           <Subtitle darkText={darkText}>{ description }</Subtitle>
                           <BtnWrap>
                               <Button to="home" 
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact="true"
                               offset={-80}
                               primary={primary ? 1 : 0}
                               dark={dark ? 1 : 0}
                               dark2={dark2 ? 1 : 0}
                               > { buttonLabel } </Button>
                           </BtnWrap>
                       </TextWrapper>
                       </Column1>
                       <Column2>
                            <ImgWrap>
                                <Img src={ img } alt={alt}/>
                                {/* <img src='../../images/svg-1.svg' alt='fsdv' /> */}
                                

                            </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection