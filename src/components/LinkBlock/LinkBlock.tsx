import styled from '@emotion/styled';

import { Spaces } from '../../styles/variables';
import ListItem from '../ListItem/ListItem';
import { ShrtcodeResult } from '../../types';


const Section = styled.section`
  margin-top: ${Spaces.medium};
`;

const List = styled.ul`
  list-style: none;
  padding: ${Spaces.zero};
  margin: ${Spaces.zero};
  display: flex;
  flex-direction: column;
`;

interface LinkBlockProps {
    shortenedLinks?: ShrtcodeResult;
}

const LinkBlock = ({ shortenedLinks }: LinkBlockProps) => {
    return (
        <Section>
            <List>
                { shortenedLinks && Object.entries(shortenedLinks).map(([key, value]) => <ListItem key={key} linkName={key} linkValue={value} />)}
            </List>
        </Section>
    )
};

export default LinkBlock;