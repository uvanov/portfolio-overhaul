import React from 'react';
import Welcome from "./components/Screens/Welcome/Welcome";
import styled from 'styled-components';

const AppWrapper = styled.div`
    padding-top: 30px;
`

const App = () => {
    return (
        <AppWrapper>
            <Welcome/>
        </AppWrapper>
    );
};

export default App;