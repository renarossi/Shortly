import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import URLInput from '../URLInput/URLInput';

import { Colors, Spaces } from '../../styles/variables';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import LinkBlock from '../LinkBlock/LinkBlock';
import { UseFetch } from '../../hooks/useFetch';
import { ShrtcodeResult } from '../../types';
import ShortlysContainer from '../ShortlysContainer/ShortlysContainer';

interface SectionInterface {
    open?: boolean;
}

const Section = styled.section<SectionInterface>`
  position: relative;
  width: calc(100% - ${Spaces.xLarge});
  max-height: ${props => props.open ? '900px' : '35px'};
  background: ${Colors.primary.white};
  padding: ${Spaces.medium} ${Spaces.mLarge};
  overflow: hidden;
  border-radius: 18px;
  transition: all 0.6s ease-in-out;
`;

const History = styled.section`
  width: 100%;
  color: ${Colors.primary.darkGray};
  
  & h5 {
    margin-bottom: ${Spaces.zero};
  }
`;

const Container: FC = () => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [shortlyHistory, setShortlyHistory] = useState<ShrtcodeResult[] | undefined>();
    const { data, loading, shortenURL, error} = UseFetch();

    const handleURLSubmit = (value: string): void => {
        setErrorMsg(undefined);
        if (value) {
            shortenURL(value);
        } else {
            setErrorMsg('Oops! We can\'t do it with no URL.');
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

    useEffect(() => {
        if (data) {
            setShortlyHistory((prev) => {
                if (prev) {
                    return [...prev, data.result];
                }

                return [data.result];
            })
        }
    }, [data]);

    return (
        <>
            <Section open={isDefined(data) || isDefined(errorMsg)}>
                <URLInput onSubmit={handleURLSubmit} loading={loading} />
                { errorMsg && (<ErrorBlock error={errorMsg} />)}
                { data && !errorMsg && (<LinkBlock shortenedLinks={data.result} />)}
            </Section>
            <History>
                <h5>Last Shortlys:</h5>
                <ShortlysContainer history={shortlyHistory} />
            </History>
        </>
    )
};

export default Container;