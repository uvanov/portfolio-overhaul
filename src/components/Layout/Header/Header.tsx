import React, {FC} from 'react';
import NavbarLink from "../../Text/NavbarLink/NavbarLink";
import styled from "styled-components";

type NavbarLinkType = {
    innerText: string;
    blockToScroll: string;
}
type Props = {
    links: NavbarLinkType[];
    button: {
        innerText: string;
        url: string;
    }
}


const HeaderStyle = styled.header`
    display: flex;
    gap: 75px;
    justify-content: flex-end;
    align-items:center;
    font-family: Consolas, Roboto, sans-serif;
    
    margin-top: 30px;
`
const HeaderListStyle = styled.ul`
    display: flex;
    align-items:center;
    gap: 75px;
`
const HeaderButton = styled.a`
    padding: 10px 22px;
    color: #64FFDA;
    border: 1px solid #64FFDA;
    border-radius: 3px;
    text-decoration: none;
    letter-spacing: 1px;
    
    &:hover{
      background: #64FFDA;
      color: black;
      box-shadow: rgba(100, 255, 218, .3) 0px 0px 15px;
    }
`


const Header: FC<Props> = ({links, button}) => {
    return (
        <HeaderStyle>
            <HeaderListStyle>
                {
                    links.map((link, index) => (
                            <li>
                                <NavbarLink index={index} innerText={link.innerText}/>
                            </li>
                        )
                    )
                }
            </HeaderListStyle>
            <HeaderButton href={button.url}>{button.innerText}</HeaderButton>
        </HeaderStyle>
    );
};

export default Header;