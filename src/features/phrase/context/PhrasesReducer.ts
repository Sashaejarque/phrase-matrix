import PhraseState from '../types/phraseState';
import PhrasesActions from './PhrasesActions';

function phraseReducer(
  state: PhraseState,
  action: PhrasesActions,
): PhraseState {
  switch (action.type) {
    case 'ADD_PHRASE':
      return { ...state, phrases: [...state.phrases, action.payload] };
    case 'DELETE_PHRASE':
      return {
        ...state,
        phrases: state.phrases.filter((p) => p.id !== action.payload),
      };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'LOADING_TRUE':
      return { ...state, loading: true };
    case 'LOADING_FALSE':
      return { ...state, loading: false };
    case 'HYDRATE_PHRASES':
      return {
        ...state,
        phrases: action.payload.map((p) => ({
          ...p,
          createdAt: new Date(p.createdAt),
        })),
      };
    default:
      return state;
  }
}

export default phraseReducer;
