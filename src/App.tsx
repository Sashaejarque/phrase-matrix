import { PhrasesProvider } from './features/phrase/context/PhrasesContext';
import PrhaseIndex from './features/phrase/PhraseIndex';
import '../src/utils/styles.global.css';
import { useEffect } from 'react';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  useEffect(() => {
    document.title = 'Phrase App';
  }, []);

  return (
    <ErrorBoundary>
      <PhrasesProvider>
        <PrhaseIndex />
      </PhrasesProvider>
    </ErrorBoundary>
  );
}

export default App;
