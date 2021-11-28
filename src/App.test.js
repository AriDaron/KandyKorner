import { render, screen } from '@testing-library/react';
import { kandykorner } from './Components/KandyKorner';


test('renders learn react link', () => {
  render(<kandykorner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
