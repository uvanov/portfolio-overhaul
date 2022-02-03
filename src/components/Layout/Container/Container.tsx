import React, {FC} from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    padding: 0 95px;
    box-sizing: border-box;
    
    @media screen and (max-width: 450px){
       padding: 0 50px;
    }
    
    @media screen and (max-width: 370px){
       padding: 0 30px;
    }
`

type Props = {
    children: JSX.Element | JSX.Element[] | string | string[];
}

const Container: FC<Props> = ({children}) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    );
};

export default Container;