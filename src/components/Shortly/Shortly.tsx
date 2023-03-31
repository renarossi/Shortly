import styled from '@emotion/styled';
import { FontSizes, Spaces } from '../../styles/variables';

const ShortlyContent = styled.span`
  font-size: ${FontSizes.xSmall};
  margin-right: ${Spaces.xSmall};
`;

const ShortlyLink = styled.span`
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface ShortlyProps {
    shortlyKey: string;
    shortlyValue: string;
}
const Shortly = ( { shortlyKey, shortlyValue }: ShortlyProps) => {
    const copyToClipboard = ():void => {
        navigator.clipboard.writeText(shortlyValue);
    }

    return (
        <ShortlyContent>
            <strong>{ shortlyKey.replaceAll('_', ' ') }:</strong>
            <ShortlyLink onClick={copyToClipboard}>{ shortlyValue }</ShortlyLink>
        </ShortlyContent>
    )
};

export default Shortly;