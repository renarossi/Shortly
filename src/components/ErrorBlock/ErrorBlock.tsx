import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { Colors, FontSizes, FontWeight, Spaces } from '../../styles/variables';

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
            <p>{ error }</p>
        </ErrorBox>
    )
};

export default ErrorBlock;