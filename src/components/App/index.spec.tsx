import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

describe('App', () => {
  it('renders', async () => {
    const { findByText } = render(<App />);
    const Home = await findByText('Home page');
    expect(Home).not.toBeNull();
  });
});
