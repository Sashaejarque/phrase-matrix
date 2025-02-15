import { render, screen, fireEvent } from '@testing-library/react';
import PhraseCard from '../PhraseCard';
import { Phrase } from '../../types/phrase';
import { vi } from 'vitest';

describe('PhraseCard Component', () => {
  const mockDeletePhrase = vi.fn();
  const mockSetRowHeight = vi.fn();

  const phrase: Phrase = {
    id: '1',
    text: 'This is a test phrase',
    createdAt: new Date(),
  };

  const setup = (setRowHeight?: (height: number) => void) => {
    return render(
      <PhraseCard
        phrase={phrase}
        deletePhrase={mockDeletePhrase}
        setRowHeight={setRowHeight}
      />,
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders phrase text correctly', () => {
    setup();
    expect(screen.getByText('This is a test phrase')).toBeInTheDocument();
  });

  test('calls deletePhrase when delete button is clicked', () => {
    setup();
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    expect(mockDeletePhrase).toHaveBeenCalledWith('1');
  });

  test('calls setRowHeight on render if provided', () => {
    setup(mockSetRowHeight);
    expect(mockSetRowHeight).toHaveBeenCalled();
  });
});
