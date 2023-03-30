import styled from '@emotion/styled';

import { Spaces } from '../../styles/variables';
import ListItem from '../ListItem/ListItem';


const Section = styled.section`
  margin-top: ${Spaces.medium};
`;

const List = styled.ul`
  list-style: none;
  padding: ${Spaces.zero};
  margin: ${Spaces.zero};
`;

const LinkBlock = () => {
    return (
        <Section>
            <List>
                <ListItem />
                <ListItem />
                <ListItem />
            </List>
        </Section>
    )
};

export default LinkBlock;