import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  it('renders the home page by default', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText('Home Component Content')).toBeInTheDocument();
  });

  it('navigates to About page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(screen.getByText(/about/i));
    expect(screen.getByText('About Component Content')).toBeInTheDocument();
  });

  it('navigates to Portfolio page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(screen.getByText(/portfolio/i));
    expect(screen.getByText('Portfolio Component Content')).toBeInTheDocument();
  });

  it('navigates to Contact page', () => {
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
