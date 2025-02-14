import { PhrasesProvider } from "./features/phrase/context/PhrasesContext";
import PrhaseIndex from "./features/phrase/PhraseIndex";

function App() {
  return (
    <PhrasesProvider>
      <PrhaseIndex />
    </PhrasesProvider>
  );
}

export default App;
