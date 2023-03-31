import React from 'react';
import styled from '@emotion/styled';

import Hero from './components/Hero/Hero';
import Container from './components/Container/Container';

import { Spaces } from './styles/variables';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spaces.zero} ${Spaces.large};
  width: 100%;
  max-width: 530px;
`;

function App() {
    return (
        <Main>
            <Hero />
            <Container />
        </Main>
    );
}

export default App;
