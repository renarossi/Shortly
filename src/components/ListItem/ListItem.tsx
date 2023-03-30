import { ReactElement, useState } from 'react';
import styled from '@emotion/styled';

import { Colors, FontSizes, Spaces } from '../../styles/variables';


interface CopyLabelProps {
  active?: boolean;
}

const Li = styled.li`
  margin: ${Spaces.xSmall} ${Spaces.zero};
  display: flex;
  cursor: pointer;
  color: ${Colors.primary.darkBlue};
`;

const Span = styled.span`
  background: ${Colors.primary.lightBlue};
  padding: ${Spaces.zero} ${Spaces.xSmall};
  margin-left: ${Spaces.small};
  transition: all 0.4s ease;
  
  &:hover {
    color: ${Colors.primary.white};
    background: ${Colors.primary.darkBlue};
  }
`;

const CopyLabel = styled.span<CopyLabelProps>`
  transition: all 1s ease;
  margin-left: auto;
  background: ${Colors.primary.darkBlue};
  color: ${Colors.primary.white};
  padding: ${Spaces.xxSmall};
  font-size: ${FontSizes.xSmall};
  border-radius: 5px;
  opacity: ${(props) => props.active ? 1 : 0};
`;

const ListItem = (): ReactElement => {
    const [showCopyLabel, setShowCopyLabel] = useState(false);
    const link = 'shrtco.de/KCveN';

    const copyToClipboard = ():void => {
        setShowCopyLabel(true);
        navigator.clipboard.writeText(link);
        setTimeout(() => setShowCopyLabel(false), 1000);
    }

    return (
        <Li>
            <strong>Short Link:</strong>
            <Span onClick={copyToClipboard}>{ link }</Span>
            <CopyLabel active={showCopyLabel}>Copied!</CopyLabel>
        </Li>
    )
};

export default ListItem;