import React from 'react';
import Container from "../../Layout/Container/Container";
import Header from "../../Layout/Header/Header";

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
        </Container>

    );
};

export default Welcome;