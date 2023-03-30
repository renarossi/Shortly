import React, { FC } from 'react';
import styled from '@emotion/styled';

import { FontSizes, Spaces, Colors } from '../../styles/variables';

const LogoWrapper = styled.div`
  text-align: center;
  
  & h1 {
    font-size: ${FontSizes.large};
    margin: ${Spaces.zero};
    color: ${Colors.primary.white};
  }
  
  & p {
    color: ${Colors.primary.darkGray};
  }
`;

const Hero: FC = () => {
    return (
        <LogoWrapper>
            <h1>Shortly</h1>
            <p>Insert the URL you would like to shorten bellow.</p>
        </LogoWrapper>
    )
};

export default Hero;