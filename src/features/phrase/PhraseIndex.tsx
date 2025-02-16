import { Box, CircularProgress, Container, Stack } from '@mui/material';
import { lazy, Suspense } from 'react'; // Importa lazy y Suspense
import { useToggle } from '../../hooks/useToggle';
import EmptyState from './components/EmptyState';
import SearchBar from './components/SearchBar';
import AddPhraseButton from './components/AddPhraseButton';
import TopBar from './components/TopBar';
import { usePhraseContext } from './context/PhrasesContext';
import Loader from './components/Loader';
import { useTranslation } from 'react-i18next';

const DialogAddPhrase = lazy(() => import('./components/DialogAddPhrase'));
const MemoizedPhraseList = lazy(
  () => import('./components/MemoizedPhraseList'),
);

const PhraseIndex = () => {
  const {
    state: { searchTerm, phrases, loading },
    actions: { addPhrase, setSearchTerm, deletePhrase },
  } = usePhraseContext();
  const { t } = useTranslation();
  const [isDialogToggled, handleDialogToggle] = useToggle();

  const hasPhrases = phrases.length > 0;
  if (loading) {
    return (
      <>
        <TopBar title={t('title_app')} />
        <Loader text={t('loading')} />
      </>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'grey.50' }}>
      <TopBar title={t('title_app')} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder={t('search_placeholder')}
        />
        {!hasPhrases && <EmptyState message={t('empty_phrases')} />}
        {hasPhrases && (
          <Suspense
            fallback={
              <Stack alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
                <CircularProgress
                  title={t('loading')}
                  size={50}
                  sx={{ color: 'black' }}
                />
              </Stack>
            }
          >
            <MemoizedPhraseList phrases={phrases} deletePhrase={deletePhrase} />
          </Suspense>
        )}
        <AddPhraseButton handleDialogToggle={handleDialogToggle} />
        <Suspense>
          <DialogAddPhrase
            closeDialog={handleDialogToggle}
            isDialogOpen={isDialogToggled}
            addPhrase={addPhrase}
            title={t('add_new_phrase')}
            buttonTitle={t('add_phrase')}
            inputLabel={t('enter_phrase')}
          />
        </Suspense>
      </Container>
    </Box>
  );
};

export default PhraseIndex;
