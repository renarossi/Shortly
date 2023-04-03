import React from 'react';
import URLInput from './URLInput';
import { act, fireEvent, render, screen } from '@testing-library/react';

test('Renders Input initial state', () => {
   render(<URLInput onSubmit={(text) => console.log(text)} loading={false} />);

   expect(screen.getByTestId('url-input')).toBeInTheDocument();
   expect(screen.getByTestId('submit-icon')).toBeInTheDocument();
   expect(screen.queryByTestId('loading-icon')).not.toBeInTheDocument();
});

test('Input submit text to parent on click', () => {
    let inputText;
    function updateInputText(text: string) {
        inputText = text;
    }

    const {rerender} = render(<URLInput onSubmit={updateInputText} loading={false} />);
    expect(screen.getByTestId('submit-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('loading-icon')).not.toBeInTheDocument();
    fireEvent.change(screen.getByTestId('url-input'), {target: {value: 'http://www.test.com'}});

    act(() => {
        screen.getByTestId('submit-button').click();
    });
    expect(inputText).toBe('http://www.test.com');

    rerender(<URLInput onSubmit={updateInputText} loading={true} />);
    expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('submit-icon')).not.toBeInTheDocument();
});

test('Input submit text to parent on enter', () => {
    let inputText;
    function updateInputText(text: string) {
        inputText = text;
    }

    const {rerender} = render(<URLInput onSubmit={updateInputText} loading={false} />);
    expect(screen.getByTestId('submit-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('loading-icon')).not.toBeInTheDocument();
    fireEvent.change(screen.getByTestId('url-input'), {target: {value: 'http://www.test.com'}});
    fireEvent.keyDown(screen.getByTestId('url-input'), {key: 'Enter', code: 'Enter'})
    expect(inputText).toBe('http://www.test.com');

    rerender(<URLInput onSubmit={updateInputText} loading={true} />);
    expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('submit-icon')).not.toBeInTheDocument();
});