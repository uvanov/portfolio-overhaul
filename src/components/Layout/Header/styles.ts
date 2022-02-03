import styled from 'styled-components';

const HeaderStyle = styled.header`
    display: flex;
    gap: 75px;
    justify-content: flex-end;
    align-items:center;
    font-family: Consolas, Roboto, sans-serif;
    
    margin-top: 42px;
`

const HeaderList = styled.ul`
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
`

export {HeaderStyle, HeaderButton, HeaderList};