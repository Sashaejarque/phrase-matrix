import { Phrase } from '../types/phrase';

interface addPhrase {
  type: 'ADD_PHRASE';
  payload: Phrase;
}

interface deletePhrase {
  type: 'DELETE_PHRASE';
  payload: string;
}

interface setSearchTerm {
  type: 'SET_SEARCH_TERM';
  payload: string;
}

interface LoadingTrue {
  type: 'LOADING_TRUE';
}
interface LoadingFalse {
  type: 'LOADING_FALSE';
}
interface hydratePhrases {
  type: 'HYDRATE_PHRASES';
  payload: Phrase[];
}
interface setError {
  type: 'SET_ERROR';
  payload: string;
}

type PhrasesActions =
  | addPhrase
  | deletePhrase
  | setSearchTerm
  | LoadingTrue
  | LoadingFalse
  | hydratePhrases
  | setError;

export default PhrasesActions;
