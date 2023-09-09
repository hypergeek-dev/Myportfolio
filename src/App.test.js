import userEvent from '@testing-library/user-event';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

// Mocking the NavigationBar component
jest.mock('./modules/navbar/', () => {
  return function DummyNavigationBar() {
    return <div data-testid="navbar">NavigationBar</div>;
  };
});

describe('App', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });

  it('renders the home page by default', () => {
    expect(screen.getByText('Home Component Content')).toBeVisible();
  });

  it('navigates to About page', async () => {
    userEvent.click(screen.getByText(/about/i));
    await screen.findByText('About Component Content');
    expect(screen.getByText('About Component Content')).toBeVisible();
  });

  it('navigates to Portfolio page', async () => {
    userEvent.click(screen.getByText(/portfolio/i));
    await screen.findByText('Portfolio Component Content');
    expect(screen.getByText('Portfolio Component Content')).toBeVisible();
  });

  it('navigates to Contact page', async () => {
    userEvent.click(screen.getByText(/contact/i));
    await screen.findByText('Contact Component Content');
    expect(screen.getByText('Contact Component Content')).toBeVisible();
  });
});
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(screen.getByText(/contact/i));
    expect(screen.getByText('Contact Component Content')).toBeInTheDocument();
  });
});
