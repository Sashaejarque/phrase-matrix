import { PhrasesProvider } from './features/phrase/context/PhrasesContext';
import PrhaseIndex from './features/phrase/PhraseIndex';
import '../src/utils/styles.global.css';
import ErrorBoundary from './utils/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ErrorBoundary>
      <PhrasesProvider>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          closeButton
        />
        <PrhaseIndex />
      </PhrasesProvider>
    </ErrorBoundary>
  );
}

export default App;
