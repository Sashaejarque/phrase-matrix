import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EmptyState from '../EmptyState';

vi.mock('react-lottie', () => ({
  default: vi.fn(() => <div data-testid="mock-lottie" />),
}));

describe('EmptyState Component', () => {
  it('should render the default message', () => {
    render(
      <EmptyState message="No phrases yet. Click the + button to add one!" />,
    );

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
