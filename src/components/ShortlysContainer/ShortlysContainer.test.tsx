import React from 'react';
import ShortlysContainer from './ShortlysContainer';
import { act, render, screen } from '@testing-library/react';

const history = [
    { code: 'MBkTCi', short_link: 'shrtco.de/MBkTCi', full_short_link: 'https://shrtco.de/MBkTCi', short_link2: '9qr.de/MBkTCi', full_short_link2: 'https://shiny.link/MBkTCi', share_link: 'shrtco.de/share/MBkTCi', full_share_link: 'https://shrtco.de/share/MBkTCi', original_link: 'https://www.npmjs.com/package/react-native-view-pdf'},
    { code: 'JEVrmM', short_link: 'link:shrtco.de/JEVrmM', full_short_link: 'https://shrtco.de/JEVrmM', short_link2: '9qr.de/JEVrmM', full_short_link2: 'https://9qr.de/JEVrmM', share_link: 'shrtco.de/share/JEVrmM', full_share_link: 'https://shrtco.de/share/JEVrmM', original_link: 'https://highrollersdublin.com/'}
];

test('Renders ShortlysContainer with no history', () => {
    render(<ShortlysContainer />);
    expect(screen.getByText('Create New Shortlys to see them here.')).toBeInTheDocument();
});

test('Renders ShortlysContainer with history', () => {
   render(<ShortlysContainer history={history} /> );
   expect(screen.getByText('MBkTCi')).toBeInTheDocument();
   expect(screen.getByText('JEVrmM')).toBeInTheDocument();
});

test('Show history on select', () => {
    render(<ShortlysContainer history={history} /> );

    act(() => {
        screen.getByTestId('history-link-JEVrmM').click();
    })

    const historyWrapper = screen.getByTestId('history-wrapper');
    expect(historyWrapper).toHaveTextContent('original link:https://highrollersdublin.com/')
});