import styled from '@emotion/styled';
import { useState } from 'react';

import { FontSizes, Spaces } from '../../styles/variables';
import { ShrtcodeResult } from '../../types';
import Shortly from '../Shortly/Shortly';

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

interface LinkProp {
    active: boolean;
}

const Link = styled.div<LinkProp>`
  cursor: pointer;
  font-size: ${FontSizes.xSmall};
  margin-right: ${Spaces.xSmall};
  transition: all 0.6s ease-in-out;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;



const EmptyMessage = styled.span`
  font-size: ${FontSizes.xSmall};
`;

interface ShortlysContainerProps {
    history?: ShrtcodeResult[];
}

const ShortlysContainer = ({ history }: ShortlysContainerProps) => {
    const [selectedShortly, setSelectedShortly] = useState<ShrtcodeResult | undefined>();

    return(
        <>
            <LinkWrapper>
                {history && history.map((shortly) => <Link data-testid={`history-link-${shortly.code}`} key={shortly.code} active={selectedShortly?.code === shortly.code} onClick={() => setSelectedShortly(shortly)}>{ shortly.code }</Link>)}
            </LinkWrapper>
            <LinkWrapper data-testid="history-wrapper">
                { !history && (<EmptyMessage>Create New Shortlys to see them here.</EmptyMessage>)}
                { selectedShortly && Object.entries(selectedShortly).map(([key, value]) => <Shortly key={key} shortlyKey={key} shortlyValue={value} />)}
            </LinkWrapper>
        </>
    )
};

export default ShortlysContainer;