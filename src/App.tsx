import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { PhrasesProvider } from './features/phrase/context/PhrasesContext';
import PhraseIndex from './features/phrase/PhraseIndex';
import '../src/utils/styles.global.css';
import ErrorBoundary from './utils/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/I18n';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1f4d3a', contrastText: '#f5f7f2' },
    secondary: { main: '#d6f36b', contrastText: '#17211b' },
    background: { default: '#f5f7f2', paper: '#ffffff' },
    text: { primary: '#17211b', secondary: '#66736a' },
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    h1: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.045em',
    },
    h2: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 999, paddingInline: 20 } },
    },
    MuiTextField: { defaultProps: { size: 'medium' } },
    MuiDialog: { styleOverrides: { paper: { borderRadius: 24, padding: 8 } } },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
