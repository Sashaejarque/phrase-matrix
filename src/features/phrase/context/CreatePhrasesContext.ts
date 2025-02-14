import { createContext } from 'react';
import PhraseState from '../types/phraseState';
import { Phrase } from '../types/phrase';

export interface PhrasesContext {
  state: PhraseState;
  actions: {
    addPhrase: (phrase: string) => void;
    deletePhrase: (id: string) => void;
    setSearchTerm: (term: string) => void;
    hydratePhrases: (phrases: Phrase[]) => void;
  };
}

export const PhrasesContext = createContext<PhrasesContext | undefined>(undefined);
