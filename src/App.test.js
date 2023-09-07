import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  
  // For debugging
  // screen.debug();

  // Using a more flexible matcher
  const linkElement = await screen.findByText((_, element) => element.textContent === "Portfolio");
  
  // Or using await for asynchronous elements
  // const linkElement = await screen.findByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});
