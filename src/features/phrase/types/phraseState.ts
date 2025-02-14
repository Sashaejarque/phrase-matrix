import { Phrase } from "./phrase";


type PhraseState = {
  phrases: Phrase[];
  searchTerm: string;
  loading: boolean;
};

export default PhraseState;
