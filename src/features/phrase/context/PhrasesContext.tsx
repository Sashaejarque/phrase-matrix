import {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
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
const deletePhrase = useCallback((id: string) => {}, []);
const setSearchTerm = useCallback((term: string) => {}, []);
const hydratePhrases = useCallback((phrases: Phrase[]) => {
  dispatch({ type: 'HYDRATE_PHRASES', payload: phrases });
}, []);


  const values = useMemo(
    () => ({
      state: {
        phrases: state.phrases,
        searchTerm: state.searchTerm,
        loading: state.loading,
      },
      actions: {
        addPhrase,
        deletePhrase,
        setSearchTerm,
        hydratePhrases
      },
    }),
    [state, addPhrase, deletePhrase, setSearchTerm, hydratePhrases]
  );

  return <PhrasesContext.Provider value={values}>{children}</PhrasesContext.Provider>;
};

export const usePhraseContext = () => {
  const context = useContext(PhrasesContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a AuthContext');
  }
  return context;
};
