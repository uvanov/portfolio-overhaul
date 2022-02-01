import React, {FC} from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    padding: 0 95px;
    box-sizing: border-box;
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