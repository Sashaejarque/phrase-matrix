import {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import phraseReducer from './PhrasesReducer';
import { PhrasesContext } from './CreatePhrasesContext';
import { Phrase } from '../types/phrase';

export const PhrasesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(phraseReducer, {
    loading: false,
    phrases: [],
    searchTerm: '',
  });

  const addPhrase = useCallback((text: string) => {
    dispatch({
      type: 'ADD_PHRASE',
      payload: { id: crypto.randomUUID(), text, createdAt: new Date() },
    });
  }, []);
  const deletePhrase = useCallback((id: string) => {
    dispatch({ type: 'DELETE_PHRASE', payload: id });
  }, []);
  const setSearchTerm = useCallback((term: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  }, []);
  const hydratePhrases = useCallback((phrases: Phrase[]) => {
    dispatch({ type: 'HYDRATE_PHRASES', payload: phrases });
  }, []);

  const filteredPhrases = useMemo(() => {
    return state.phrases.filter((phrase) =>
      phrase.text.toLowerCase().includes(state.searchTerm.toLowerCase()),
    );
  }, [state.phrases, state.searchTerm]);

  useEffect(() => {
    const loadPhrases = async () => {
      try {
        const savedPhrases = localStorage.getItem('phrases');
        
        if (savedPhrases) {
          const parsed = JSON.parse(savedPhrases);
          hydratePhrases(parsed);
        }
        
      } catch (error) {
        console.error('Error loading phrases:', error);
        localStorage.removeItem('phrases');
      } finally {
        dispatch({ type: 'LOADING_FALSE' });
      }
    };

    dispatch({ type: 'LOADING_TRUE' });
    loadPhrases();
  }, [hydratePhrases]);

  useEffect(() => {
    if (!state.loading && state.phrases.length > 0) {
      localStorage.setItem('phrases', JSON.stringify(state.phrases));
    }
  }, [state.phrases, state.loading]);

  const values = useMemo(
    () => ({
      state: {
        phrases: filteredPhrases,
        searchTerm: state.searchTerm,
        loading: state.loading,
      },
      actions: {
        addPhrase,
        deletePhrase,
        setSearchTerm,
        hydratePhrases,
      },
    }),
    [
      state,
      addPhrase,
      deletePhrase,
      setSearchTerm,
      hydratePhrases,
      filteredPhrases,
    ],
  );

  return (
    <PhrasesContext.Provider value={values}>{children}</PhrasesContext.Provider>
  );
};

export const usePhraseContext = () => {
  const context = useContext(PhrasesContext);
  if (!context) {
    throw new Error('usePhraseContext must be used within a PhraseProvider');
  }
  return context;
};
