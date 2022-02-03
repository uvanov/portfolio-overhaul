import React, {FC} from 'react';
import {HeaderStyle, HeaderButton, HeaderList} from './styles';
import NavbarLink from "../../Text/NavbarLink/NavbarLink";

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


const Header: FC<Props> = ({links, button}) => {
    return (
        <HeaderStyle>
            <HeaderList>
                {
                    links.map((link, index) => (
                            <li>
                                <NavbarLink index={index} innerText={link.innerText}/>
                            </li>
                        )
                    )
                }
            </HeaderList>
            <HeaderButton href={button.url}>{button.innerText}</HeaderButton>
        </HeaderStyle>
    );
};

export default Header;