import React, {FC} from 'react';
import styled from 'styled-components';

type Props = {
    index: number;
    innerText: string;
}

const NavbarLinkStyle = styled.span`
    display: flex;
    align-items:center;
    gap: 6px;
    color: #CCD6F6;
    font-size: 16px;
    cursor: pointer;
`
const NavbarIndexStyle = styled.span`
    font-size: 13px;  
    color: #64FFDA;
`


const NavbarLink: FC<Props> = ({index, innerText}) => {
    return (
        <NavbarLinkStyle>
            <NavbarIndexStyle>0{index + 1 }.</NavbarIndexStyle>
            <span>{innerText}</span>
        </NavbarLinkStyle>
    );
};

export default NavbarLink;