import React from 'react';
import Container from "../../Layout/Container/Container";
import Header from "../../Layout/Header/Header";
import styled from "styled-components";


// Styles

const AboutWrapper = styled.div`
    display: flex;
    gap: 37px;
`
const ImageWrapper = styled.div`

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
`
const AboutText = styled.p`
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;     
        color: #8892B0;
        max-width: 430px;
`
const AboutContactList = styled.ul`
    display: flex;
    gap: 20px;
`
const AboutContactLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px;
    
    border: 3px solid #64FFDA;
`

// Assets



const Welcome = () => {
    return (
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
                    {/*  Image Here  */}
                </ImageWrapper>

                <AboutInformationWrapper>
                    <HelloText>Привет, меня зовут</HelloText>
                    <NameText>Кирилл Иванов</NameText>
                    <AboutText>
                        Я — веб-разработчик, специализирующийся на создании прогрессивных и
                        удобных сайтов и веб-приложений.
                    </AboutText>

                    <AboutContactList>
                        <AboutContactLink>

                        </AboutContactLink>
                    </AboutContactList>
                </AboutInformationWrapper>
            </AboutWrapper>
        </Container>

    );
};

export default Welcome;