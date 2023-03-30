import { FC, useState } from 'react';
import styled from '@emotion/styled';

import URLInput from '../URLInput/URLInput';

import { Colors, Spaces } from '../../styles/variables';
import ErrorBlock from '../ErrorBlock/ErrorBlock';

interface SectionInterface {
    error?: string;
}

const Section = styled.section<SectionInterface>`
  position: relative;
  width: calc(100% - ${Spaces.xLarge});
  height: ${props => props.error ? '140px' : '35px'};
  background: ${Colors.primary.white};
  padding: ${Spaces.medium} ${Spaces.mLarge};
  overflow: hidden;
  border-radius: 18px;
  transition: all 0.6s ease-in-out;
`;

const Container: FC = () => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>();

    const handleURLSubmit = (value: string): void => {
        setErrorMsg(undefined);
        if (value) {
            console.log(value);
        } else {
            setErrorMsg('Oops! We can\'t do it with no URL :/');
        }
    }

    return (
        <Section error={errorMsg} >
            <URLInput onSubmit={handleURLSubmit} />
            { errorMsg && (<ErrorBlock error={errorMsg} />)}
        </Section>
    )
};

export default Container;