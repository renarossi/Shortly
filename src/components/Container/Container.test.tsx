import React from 'react';
import Container from './Container';
import { screen, render, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
    rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
        return res(ctx.json({
            ok: true,
            result: { code: 'JEVrmM', short_link: 'link:shrtco.de/JEVrmM', full_short_link: 'https://shrtco.de/JEVrmM', short_link2: '9qr.de/JEVrmM', full_short_link2: 'https://9qr.de/JEVrmM', share_link: 'shrtco.de/share/JEVrmM', full_share_link: 'https://shrtco.de/share/JEVrmM', original_link: 'https://highrollersdublin.com/'}
        }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Renders Container initial state', () => {
   render(<Container />);
   const spyLoStoRemove = jest.spyOn(localStorage, 'getItem');
   expect(screen.getByTestId('url-input')).toBeInTheDocument();
   expect(screen.getByText('Last Shortlys:')).toBeInTheDocument();
   expect(screen.getByText('Create New Shortlys to see them here.')).toBeInTheDocument();
});

test('Show error if input is empty', () => {
   render(<Container />);
   fireEvent.change(screen.getByTestId('url-input'), {target: {value: ''}});
   fireEvent.keyDown(screen.getByTestId('url-input'), {key: 'Enter', code: 'Enter'})
   expect(screen.getByTestId('error-icon')).toBeInTheDocument();
   expect(screen.getByText('Oops! We can\'t do it with no URL.')).toBeInTheDocument();
   expect(screen.getByText('Create New Shortlys to see them here.')).toBeInTheDocument();
});

test('Get short links - success', async () => {
    render(<Container />);
    expect(screen.getByText('Create New Shortlys to see them here.')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('url-input'), {target: {value: 'https://highrollersdublin.com/'}});
    fireEvent.keyDown(screen.getByTestId('url-input'), {key: 'Enter', code: 'Enter'})

    await screen.findByTestId('link-block');

    expect(screen.getByTestId('link-block')).toBeInTheDocument();
    expect(screen.getByText('original link')).toBeInTheDocument();
    expect(screen.getByText('https://highrollersdublin.com/')).toBeInTheDocument();

    await screen.findByTestId('history-link-JEVrmM');
    expect(screen.getByTestId('history-link-JEVrmM')).toBeInTheDocument();
    expect(screen.queryByText('Create New Shortlys to see them here.')).not.toBeInTheDocument();
});

test('Get short links - failed', async () => {
    server.use(
        rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
            return res(
                ctx.status(400),
                ctx.json({
                    ok: false,
                    error_code: 10,
                    error: 'The link you entered is a disallowed link, for more infos see shrtco.de/disallowed',
                    disallowed_reason: 'Blacklisted Domain: shortener'
                }
            ))
        }),
    );

    render(<Container />);
    fireEvent.change(screen.getByTestId('url-input'), {target: {value: 'https://shrtco.de/MBkTCi'}});
    fireEvent.keyDown(screen.getByTestId('url-input'), {key: 'Enter', code: 'Enter'})

    await screen.findByTestId('error-icon');
    expect(screen.getByTestId('error-icon')).toBeInTheDocument();
    expect(screen.getByText('The link you entered is a disallowed link, for more infos see shrtco.de/disallowed')).toBeInTheDocument();
});