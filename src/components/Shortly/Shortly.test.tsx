import React from 'react';
import Shortly from './Shortly';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
    let clipboardData = '';
    const mockClipboard = {
        writeText: jest.fn(
            (data) => {
                clipboardData = data;
            }
        ),
        readText: jest.fn(
            () => {
                return clipboardData;
            }
        )
    };
    global.navigator.clipboard = mockClipboard;
});

test('Renders Shortly', () => {
    render(<Shortly shortlyKey={'full_share_link'} shortlyValue={'https://shrtco.de/share/MBkTCi'}/>);
    expect(screen.getByText('full share link:')).toBeInTheDocument();
    expect(screen.getByText('https://shrtco.de/share/MBkTCi')).toBeInTheDocument();
});

test('Copy to clipboard', () => {
    render(<Shortly shortlyKey={'full_share_link'} shortlyValue={'https://shrtco.de/share/MBkTCi'}/>);
    screen.getByTestId('shortly-value').click();
    expect(navigator.clipboard.readText()).toBe('https://shrtco.de/share/MBkTCi')
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://shrtco.de/share/MBkTCi');
});