import { Box, CircularProgress, Container } from '@mui/material';

import { useToggle } from '../../hooks/useToggle';
import EmptyState from './components/EmptyState';
import SearchBar from './components/SearchBar';
import AddPhraseButton from './components/AddPhraseButton';
import TopBar from './components/TopBar';
import { usePhraseContext } from './context/PhrasesContext';
import MemoizedPhraseList from './components/MemoizedPhraseList';
import DialogAddPhrase from './components/DialogAddPhrase';

const PhraseIndex = () => {
  const {
    state: { searchTerm, phrases, loading },
    actions: { addPhrase, setSearchTerm, deletePhrase },
  } = usePhraseContext();

  const [isDialogToggled, handleDialogToggle] = useToggle();

  const hasPhrases = phrases.length > 0;

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'grey.50' }}>
      <TopBar title="Phrases App" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        {loading && (
          <CircularProgress
            title="Loading..."
            size={50}
            sx={{ color: 'black', mt: 16 }}
            data-testid="loading"
          />
        )}
        {!hasPhrases && <EmptyState />}
        {hasPhrases && (
          <MemoizedPhraseList phrases={phrases} deletePhrase={deletePhrase} />
        )}
        <AddPhraseButton handleDialogToggle={handleDialogToggle} />
        <DialogAddPhrase
          closeDialog={handleDialogToggle}
          isDialogOpen={isDialogToggled}
          addPhrase={addPhrase}
        />
      </Container>
    </Box>
  );
};

export default PhraseIndex;
