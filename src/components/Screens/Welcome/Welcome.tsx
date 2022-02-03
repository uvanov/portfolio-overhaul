import React from 'react';
import Container from "../../Layout/Container/Container";
import Header from "../../Layout/Header/Header";
import styled from "styled-components";


// Assets Import

import WelcomeVKImage from '../../../assets/images/vk.svg';
import WelcomeTelegramImage from '../../../assets/images/telegram.svg';
import WelcomeGithubImage from '../../../assets/images/github.svg';
import WelcomeImage from '../../../assets/images/main-image.jpg';
import GlowImage from '../../../assets/images/glow.webp';

// Styles Definition

const AboutWrapper = styled.div`
    display: flex;
    justify-content:center;
    gap: 37px;
    
    position:relative;
    
    margin-top: 190px;
    
    @media screen and (max-width: 1080px){
      flex-direction: column;
      align-items:center;
    }
    
    @media screen and (max-width: 800px){
      align-items:unset;
    }
`
const ImageWrapper = styled.div`
    border-radius: 11px;
    overflow: hidden;
    
    @media screen and (max-width: 450px){
       display: none;
    }
    
    img{
      width: 100%;
    }
`
const AboutInformationWrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding-top: 7px;
    padding-bottom: 29px;
`
const HelloText = styled.span`
    font-family: Consolas, Robot, sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #64FFDA;
`
const NameText = styled.span`
    font-weight: bold;
    font-size: 43px;
    color: #CCD6F6;
    margin: 32px 0 9px;
    
    @media screen and (max-width: 450px){
       font-size: 30px;
       margin-bottom: 50px;
    }
`
const AboutText = styled.p`
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;     
        color: #8892B0;
        max-width: 430px;
        
        @media screen and (max-width: 450px){
           font-size: 21px;
        }
`
const AboutContactList = styled.ul`
    display: flex;
    gap: 20px;
    margin-top: 105px;
    
    @media screen and (max-width: 1080px){
       justify-content:center;
    }
    
    @media screen and (max-width: 450px){
       font-size: 30px;
       margin-bottom: 50px;
    }
    
`
const AboutContactLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 17px;
    border: 3px solid #64FFDA;
    box-sizing: border-box;
    
    &:hover {
       transform: scale(1.1);
    }
    
    @media screen and (max-width: 325px){
       padding: 10px;
    }
`
const Glow = styled.img`
    position:absolute;
    top: -1100px;
    left: -1000px;
    opacity: .8;
    z-index: -2;
`


const Welcome = () => {

    // Constants

    const CONTACT_LIST = [
        {
            url: 'https://vk.com/uvanov_vk',
            imageUrl: WelcomeVKImage
        },
        {
            url: 'https://t.me/uvanov_tg',
            imageUrl: WelcomeTelegramImage
        },
        {
            url: 'https://github.com/uvanov',
            imageUrl: WelcomeGithubImage
        }
    ]

    return (
        <>
            <Container>
                <Header
                    button={{innerText: 'Резюме', url: '/'}}
                    links={
                        [
                            {
                                innerText: 'Обо мне',
                                blockToScroll: '.some-block'
                            },
                            {
                                innerText: 'Работы',
                                blockToScroll: '.some-block-2'
                            }
                        ]
                    }
                />

                <AboutWrapper>
                    <ImageWrapper>
                        <img src={WelcomeImage} alt="uvanov"/>
                    </ImageWrapper>

                    <AboutInformationWrapper>
                        <HelloText>Привет, меня зовут</HelloText>
                        <NameText>Кирилл Иванов</NameText>
                        <AboutText>
                            Я — веб-разработчик, специализирующийся на создании прогрессивных и
                            удобных сайтов и веб-приложений.
                        </AboutText>

                        <AboutContactList>
                            {
                                CONTACT_LIST.map((ContactLink) => (
                                    <AboutContactLink href={ContactLink.url}>
                                        <img src={ContactLink.imageUrl} alt=""/>
                                    </AboutContactLink>
                                ))
                            }
                        </AboutContactList>
                    </AboutInformationWrapper>
                </AboutWrapper>

                <Glow src={GlowImage}/>
            </Container>

        </>

    );
};

export default Welcome;