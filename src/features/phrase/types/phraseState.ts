import { Phrase } from './phrase';

type PhraseState = {
  phrases: Phrase[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
};

export default PhraseState;
