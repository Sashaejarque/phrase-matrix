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
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const PhrasesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(phraseReducer, {
    loading: false,
    phrases: [],
    searchTerm: '',
    error: null,
  });
  const { t } = useTranslation();

  const setError = useCallback((message: string) => {
    dispatch({ type: 'SET_ERROR', payload: message });
    toast.error(message);
  }, []);

  const addPhrase = useCallback((text: string) => {
    try {
      dispatch({
        type: 'ADD_PHRASE',
        payload: { id: crypto.randomUUID(), text, createdAt: new Date() },
      });
      toast.success(t('phrase_added_success'));
    } catch (error) {
      console.error('Error adding phrase:', error);
      setError(t('phrase_error'));
    }
  }, []);

  const deletePhrase = useCallback((id: string) => {
    try {
      dispatch({ type: 'DELETE_PHRASE', payload: id });
      toast.success(t('phrase_deleted_correctly'));
    } catch (error) {
      console.error('Error deleting phrase:', error);
      setError(t('couldnt_delete_phrase'));
    }
  }, []);

  const setSearchTerm = useCallback((term: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  }, []);

  const hydratePhrases = useCallback((phrases: Phrase[]) => {
    try {
      if (!Array.isArray(phrases)) {
        toast.error(t('error_loading_phrases'));
        throw new Error('Invalid data: phrases must be an array');
      }
      dispatch({ type: 'HYDRATE_PHRASES', payload: phrases });
    } catch (error) {
      console.error('Error hydrating phrases:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    }
  }, []);

  const filteredPhrases = useMemo(() => {
    return state.phrases.filter((phrase) =>
      phrase.text.toLowerCase().includes(state.searchTerm.toLowerCase()),
    );
  }, [state.phrases, state.searchTerm]);

  useEffect(() => {
    const loadPhrases = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const savedPhrases = localStorage.getItem('phrases');

        if (savedPhrases) {
          const parsed = JSON.parse(savedPhrases);
          hydratePhrases(parsed);
        }
      } catch (error) {
        console.error('Error loading phrases:', error);
        setError(t('error_loading_phrases'));
        localStorage.removeItem('phrases');
      } finally {
        dispatch({ type: 'LOADING_FALSE' });
      }
    };

    dispatch({ type: 'LOADING_TRUE' });
    loadPhrases();
  }, [hydratePhrases, setError]);

  useEffect(() => {
    if (!state.loading) {
      if (state.phrases.length > 0) {
        localStorage.setItem('phrases', JSON.stringify(state.phrases));
      } else {
        localStorage.removeItem('phrases');
      }
    }
  }, [state.phrases, state.loading]);

  const values = useMemo(
    () => ({
      state: {
        phrases: filteredPhrases,
        searchTerm: state.searchTerm,
        loading: state.loading,
        error: state.error,
      },
      actions: {
        addPhrase,
        deletePhrase,
        setSearchTerm,
        hydratePhrases,
        setError,
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
