import { FC } from 'react';
import styled from '@emotion/styled';

import URLInput from '../URLInput/URLInput';

import { Colors, Spaces } from '../../styles/variables';

const Section = styled.section`
  position: relative;
  width: calc(100% - ${Spaces.xLarge});
  background: ${Colors.primary.white};
  padding: ${Spaces.medium} ${Spaces.mLarge};
  overflow: hidden;
  border-radius: 18px;
  transition: 0.6s ease-out;
`;

const Container: FC = () => {
    const handleURLSubmit = (value: string): void => {
        if (value) {
            console.log(value);
        } else {
            console.log('Invalid URL');
        }
    }

    return (
        <Section>
            <URLInput onSubmit={handleURLSubmit} />
        </Section>
    )
};

export default Container;