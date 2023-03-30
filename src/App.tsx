import React from 'react';
import styled from '@emotion/styled';

import Hero from './components/Hero/Hero';
import { Spaces } from './styles/variables';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${Spaces.large};
`;

function App() {
    return (
        <Main>
            <Hero />
        </Main>
    );
}

export default App;
