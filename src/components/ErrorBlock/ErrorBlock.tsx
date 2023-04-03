import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { Colors, FontSizes, FontWeight, Spaces } from '../../styles/variables';

const BigIcon = styled.h1`
  font-size: ${FontSizes.large};
  color: ${Colors.primary.darkRed}
`;

const ErrorBox = styled.div`
  width: 100%;
  text-align: center;
  margin-top: ${Spaces.large};
  
  & p {
    color: ${Colors.primary.darkRed};
    font-size: ${FontSizes.mSmall};
    font-weight: ${FontWeight.bold};
    margin-top: ${Spaces.small};
  }
`;

interface ErrorBlockProps {
    error?: string;
}

const ErrorBlock = ({ error }: ErrorBlockProps): ReactElement  => {
    return (
        <ErrorBox>
            <BigIcon data-testid={'error-icon'}>=/</BigIcon>
            <p>{ error }</p>
        </ErrorBox>
    )
};

export default ErrorBlock;