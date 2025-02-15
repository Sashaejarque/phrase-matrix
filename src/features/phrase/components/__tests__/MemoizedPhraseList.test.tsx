import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MemoizedPhraseList from '../MemoizedPhraseList';
import { Phrase } from '../../types/phrase';

vi.mock('./PhraseCard', () => ({
  default: ({ phrase }: { phrase: Phrase }) => (
    <div data-testid="phrase-card">{phrase.text}</div>
  ),
}));

describe('MemoizedPhraseList Component', () => {
  const mockDeletePhrase = vi.fn();

  const mockPhrases: Phrase[] = [
    { id: '1', text: 'Hello World', createdAt: new Date() },
    { id: '2', text: 'Testing is great', createdAt: new Date() },
    { id: '3', text: 'React rocks', createdAt: new Date() },
  ];

  it('renders the list with phrases', () => {
    render(
      <MemoizedPhraseList
        phrases={mockPhrases}
        deletePhrase={mockDeletePhrase}
      />,
    );

    mockPhrases.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders an empty list when no phrases are provided', () => {
    render(<MemoizedPhraseList phrases={[]} deletePhrase={mockDeletePhrase} />);

    expect(screen.queryByTestId('phrase-card')).not.toBeInTheDocument();
  });
});
