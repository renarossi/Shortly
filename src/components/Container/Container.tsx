import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import URLInput from '../URLInput/URLInput';

import { Colors, Spaces } from '../../styles/variables';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import LinkBlock from '../LinkBlock/LinkBlock';
import { UseFetch } from '../../hooks/useFetch';

interface SectionInterface {
    open?: boolean;
}

const Section = styled.section<SectionInterface>`
  position: relative;
  width: calc(100% - ${Spaces.xLarge});
  height: ${props => props.open ? '350px' : '35px'};
  background: ${Colors.primary.white};
  padding: ${Spaces.medium} ${Spaces.mLarge};
  overflow: hidden;
  border-radius: 18px;
  transition: all 0.6s ease-in-out;
`;

const Container: FC = () => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const { data, loading, shortenURL, error} = UseFetch();

    const handleURLSubmit = (value: string): void => {
        if (value) {
            shortenURL(value);
        } else {
            setErrorMsg('Oops! We can\'t do it with no URL :/');
        }
    }

    const isDefined = (variable: any):boolean => {
        return typeof variable !== 'undefined';
    }

    useEffect(() => {
        if (error) {
            setErrorMsg(error.error);
        }
    }, [error]);

    return (
        <Section open={isDefined(data) || isDefined(errorMsg)}>
            <URLInput onSubmit={handleURLSubmit} loading={loading} />
            { errorMsg && (<ErrorBlock error={errorMsg} />)}
            { data && (<LinkBlock shortenedLinks={data.result} />)}
        </Section>
    )
};

export default Container;