import { FC, useState } from 'react';
import styled from '@emotion/styled';

import URLInput from '../URLInput/URLInput';

import { Colors, Spaces } from '../../styles/variables';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import LinkBlock from '../LinkBlock/LinkBlock';

interface SectionInterface {
    open?: boolean;
}

const Section = styled.section<SectionInterface>`
  position: relative;
  width: calc(100% - ${Spaces.xLarge});
  height: ${props => props.open ? '240px' : '35px'};
  background: ${Colors.primary.white};
  padding: ${Spaces.medium} ${Spaces.mLarge};
  overflow: hidden;
  border-radius: 18px;
  transition: all 0.6s ease-in-out;
`;

const Container: FC = () => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [openDrawer, setOpenDrawer] = useState<boolean>(true);

    const handleURLSubmit = (value: string): void => {
        if (value) {
            console.log(value);
        } else {
            setOpenDrawer(true);
            setErrorMsg('Oops! We can\'t do it with no URL :/');
        }
    }

    return (
        <Section open={openDrawer} >
            <URLInput onSubmit={handleURLSubmit} />
            { errorMsg && (<ErrorBlock error={errorMsg} />)}
            <LinkBlock />
        </Section>
    )
};

export default Container;