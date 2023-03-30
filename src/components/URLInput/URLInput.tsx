import { FormEvent, ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faGlobe, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import { Colors, FontSizes, FontWeight, Spaces, SpinEffect } from '../../styles/variables';

const Input = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & input {
    color: ${Colors.primary.darkBlue};
    width: 80%;
    font-size: ${FontSizes.medium};
    font-weight: ${FontWeight.bold};
    padding-left: ${Spaces.mLarge};
    border: none;
    
    &::placeholder {
      font-size: ${FontSizes.medium};
      font-weight: ${FontWeight.bold};
      color: ${Colors.primary.darkBlue};
    }
    
    &:focus-visible {
      outline: none;
    }
  }
  
  & button {
    cursor: pointer;
    width: 35px;
    height: 35px;
    color: ${Colors.primary.darkBlue};
    background: ${Colors.primary.lightBlue};
    border-radius: 50%;
    font-size: ${FontSizes.mSmall};
    transition: 0.4s ease;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      color: ${Colors.primary.white};
      background: ${Colors.primary.darkBlue};
    }
  }
`;

const Spinner = styled(FontAwesomeIcon)`
  animation: ${SpinEffect} 1s ease infinite;
`;

interface URLInputProps {
    loading?: boolean;
    onSubmit: (text: string) => void;
}

const URLInput = ({ onSubmit, loading }: URLInputProps): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');

    const submitURL = ():void => {
        onSubmit(inputValue);
    }

    return (
        <Input>
            <FontAwesomeIcon className="input-icon" icon={ faGlobe } />
            <input type="text" placeholder="Enter your URL" value={inputValue} onChange={(event: FormEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value)} />
            <button onClick={submitURL}>
                { !loading && (<FontAwesomeIcon icon={faAnglesRight} />)}
                { loading && (<Spinner icon={faSpinner} />)}
            </button>
        </Input>
    )
};

export default URLInput;