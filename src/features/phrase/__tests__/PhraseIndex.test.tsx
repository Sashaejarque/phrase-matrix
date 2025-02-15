import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PhrasesProvider } from '../context/PhrasesContext';
import PhraseIndex from '../PhraseIndex';
import { PhrasesContext } from '../context/CreatePhrasesContext';
import { vi } from 'vitest';

const renderWithContext = () => {
  render(
    <PhrasesProvider>
      <PhraseIndex />
    </PhrasesProvider>,
  );
};

describe('PhraseIndex', () => {
  test('should render the component correctly', () => {
    renderWithContext();
    expect(screen.getByText('Phrases App')).toBeInTheDocument();
  });

  test('should show EmptyState when no phrases are available', () => {
    renderWithContext();

    const emptyState = screen.getByText(
      'No phrases yet. Click the + button to add one!',
    );
    expect(emptyState).toBeInTheDocument();
  });

  test('should show phrases when available', async () => {
    renderWithContext();

    const addPhraseButton = screen.getByTestId('add-phrase-button');
    fireEvent.click(addPhraseButton);

    const input = screen.getByLabelText(
      'Enter your phrase',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Hello World' } });

    const addButton = screen.getByText('Add phrase');
    fireEvent.click(addButton);

    await waitFor(() => screen.getByText('Hello World'));
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('should toggle the DialogAddPhrase on button click', () => {
    renderWithContext();

    expect(screen.queryByText('Add Phrase Dialog')).not.toBeInTheDocument();

    const addPhraseButton = screen.getByTestId('add-phrase-button');
    fireEvent.click(addPhraseButton);

    expect(screen.getByText('Add a new phrase')).toBeInTheDocument();

    const closeDialogButton = screen.getByTestId('close-dialog');
    fireEvent.click(closeDialogButton);

    expect(screen.queryByText('Add Phrase Dialog')).not.toBeInTheDocument();
  });

  test('should display CircularProgress when loading is true', () => {
    const mockContextValue = {
      state: {
        phrases: [],
        searchTerm: '',
        loading: true,
      },
      actions: {
        addPhrase: vi.fn(),
        setSearchTerm: vi.fn(),
        deletePhrase: vi.fn(),
        hydratePhrases: vi.fn(),
      },
    };

    render(
      <PhrasesContext.Provider value={mockContextValue}>
        <PhraseIndex />
      </PhrasesContext.Provider>,
    );

    const loadingState = screen.getByTestId('loading');
    expect(loadingState).toBeInTheDocument();
  });
});
