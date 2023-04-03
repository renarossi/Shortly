import React from 'react';
import ErrorBlock from './ErrorBlock';
import { render, screen } from '@testing-library/react';

test('Renders with error msg', () => {
   render(<ErrorBlock error={'This is an error msg.'} />);

   expect(screen.getByTestId('error-icon')).toBeInTheDocument();
   expect(screen.getByText('This is an error msg.')).toBeInTheDocument();
});