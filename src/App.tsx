import { PhrasesProvider } from './features/phrase/context/PhrasesContext';
import PrhaseIndex from './features/phrase/PhraseIndex';
import '../src/utils/styles.global.css';

function App() {
  return (
    <PhrasesProvider>
      <PrhaseIndex />
    </PhrasesProvider>
  );
}

export default App;
