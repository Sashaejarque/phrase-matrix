import { render, screen, fireEvent } from '@testing-library/react';
import { Phrase } from '../../types/phrase';
import { PhrasesProvider, usePhraseContext } from '../PhrasesContext';

const TestComponent = () => {
  const { state, actions } = usePhraseContext();

  return (
    <div>
      <input
        data-testid="phrase-input"
        onChange={(e) => actions.setSearchTerm(e.target.value)}
      />
      <button onClick={() => actions.addPhrase('Hello World')}>
        Add Phrase
      </button>
      <ul>
        {state.phrases.map((phrase: Phrase) => (
          <li key={phrase.id}>
            {phrase.text}
            <button onClick={() => actions.deletePhrase(phrase.id)}>
              Delete Phrase
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('PhrasesContext', () => {
  test('should add and delete phrases correctly', () => {
    render(
      <PhrasesProvider>
        <TestComponent />
      </PhrasesProvider>,
    );

    fireEvent.click(screen.getByText('Add Phrase'));
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    const deleteButton = screen.getByText('Delete Phrase');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });

  test('should handle search term correctly', () => {
    render(
      <PhrasesProvider>
        <TestComponent />
      </PhrasesProvider>,
    );

    const input = screen.getByTestId('phrase-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.value).toBe('Test');
  });
});
