import { ReactElement, useState } from 'react';
import styled from '@emotion/styled';

import { Colors, FontSizes, FontWeight, Spaces } from '../../styles/variables';


interface CopyLabelProps {
  active?: boolean;
}

const Li = styled.li`
  margin: ${Spaces.xSmall} ${Spaces.zero};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: ${Colors.primary.darkBlue};
`;

const Span = styled.span`
  background: ${Colors.primary.lightBlue};
  padding: ${Spaces.zero} ${Spaces.xSmall};
  margin-left: ${Spaces.small};
  transition: all 0.4s ease;
  font-size: ${FontSizes.xSmall};
  
  &:hover {
    color: ${Colors.primary.white};
    background: ${Colors.primary.darkBlue};
  }
`;

const Strong = styled.strong`
  font-weight: ${FontWeight.extraBold};
  text-transform: capitalize;
`;

const CopyLabel = styled.span<CopyLabelProps>`
  transition: all 1s ease;
  margin-left: ${Spaces.medium};
  background: ${Colors.primary.darkBlue};
  color: ${Colors.primary.white};
  padding: ${Spaces.xxSmall};
  font-size: ${FontSizes.xSmall};
  border-radius: 5px;
  opacity: ${(props) => props.active ? 1 : 0};
`;

interface ListItemProps {
    linkName: string;
    linkValue: string;
}

const ListItem = ({ linkName, linkValue }: ListItemProps): ReactElement => {
    const [showCopyLabel, setShowCopyLabel] = useState(false);

    const copyToClipboard = ():void => {
        setShowCopyLabel(true);
        navigator.clipboard.writeText(linkValue);
        setTimeout(() => setShowCopyLabel(false), 1000);
    }

    return (
        <Li>
            <Strong>{ linkName.replaceAll('_', ' ') }</Strong>
            <Span onClick={copyToClipboard}>{ linkValue }</Span>
            <CopyLabel active={showCopyLabel}>Copied!</CopyLabel>
        </Li>
    )
};

export default ListItem;