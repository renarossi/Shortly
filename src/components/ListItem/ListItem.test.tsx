import React from 'react';
import ListItem from './ListItem';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
    let clipboardData = '';
    const mockClipboard = {
        writeText: jest.fn(
            (data) => {clipboardData = data}
        ),
        readText: jest.fn(
            () => {return clipboardData}
        ),
    };
    global.navigator.clipboard = mockClipboard;
});

test('Renders ListItem', () => {
    render(<ListItem linkName={'full_share_link'} linkValue={'https://shrtco.de/share/MBkTCi'}/>);
    expect(screen.getByText('full share link')).toBeInTheDocument();
    expect(screen.getByText('https://shrtco.de/share/MBkTCi')).toBeInTheDocument();
});

test('Copy to clipboard', () => {
    render(<ListItem linkName={'full_share_link'} linkValue={'https://shrtco.de/share/MBkTCi'}/>);
    screen.getByTestId('link-value').click();
    expect(screen.getByText('Copied!')).toBeInTheDocument();
    expect(navigator.clipboard.readText()).toBe('https://shrtco.de/share/MBkTCi')
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://shrtco.de/share/MBkTCi');
});