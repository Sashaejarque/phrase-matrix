import { PhrasesProvider } from './features/phrase/context/PhrasesContext';
import PhraseIndex from './features/phrase/PhraseIndex';
import '../src/utils/styles.global.css';
import ErrorBoundary from './utils/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/I18n';

function App() {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <PhrasesProvider>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            closeButton
          />
          <PhraseIndex />
        </PhrasesProvider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;
