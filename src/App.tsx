import { PhrasesProvider } from './features/phrase/context/PhrasesContext';
import PrhaseIndex from './features/phrase/PhraseIndex';
import '../src/utils/styles.global.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Phrase App';
  }, []);

  return (
    <PhrasesProvider>
      <PrhaseIndex />
    </PhrasesProvider>
  );
}

export default App;
