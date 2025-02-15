import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AddPhraseButton from '../AddPhraseButton';
import { vi } from 'vitest';

describe('AddPhraseButton', () => {
  it('should render the button correctly', () => {
    render(<AddPhraseButton handleDialogToggle={vi.fn()} />);
    const button = screen.getByRole('button', { name: /add/i });
    expect(button).toBeInTheDocument();
  });

  it('should have the icon', () => {
    render(<AddPhraseButton handleDialogToggle={vi.fn()} />);
    const icon = screen.getByTestId('AddIcon');
    expect(icon).toBeInTheDocument();
  });

  it('should call handleDialogToggle on click', () => {
    const handleDialogToggleMock = vi.fn();
    render(<AddPhraseButton handleDialogToggle={handleDialogToggleMock} />);

    const button = screen.getByRole('button', { name: /add/i });
    fireEvent.click(button);
    expect(handleDialogToggleMock).toHaveBeenCalledTimes(1);
  });
});
