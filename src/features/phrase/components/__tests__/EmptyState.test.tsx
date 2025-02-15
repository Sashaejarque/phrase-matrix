import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmptyState from '../EmptyState';

describe('EmptyState Component', () => {
  it('should render the default message', () => {
    render(<EmptyState />);

    expect(
      screen.getByText('No phrases yet. Click the + button to add one!'),
    ).toBeInTheDocument();
  });

  it('should render a custom message', () => {
    const customMessage = 'No items available';
    render(<EmptyState message={customMessage} />);

    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});
